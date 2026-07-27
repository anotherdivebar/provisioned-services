import { NextResponse } from "next/server";
import { submitVendorApplication } from "@/lib/submit-vendor-application";

interface TurnstileVerification {
  success: boolean;
  action?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid application data." },
        { status: 400 }
      );
    }

    const applicationData = { ...body } as Record<string, unknown>;
    const turnstileToken = applicationData.turnstileToken;
    delete applicationData.turnstileToken;

    if (
      typeof turnstileToken !== "string" ||
      turnstileToken.length === 0 ||
      turnstileToken.length > 2048
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Complete the security verification before submitting.",
        },
        { status: 400 }
      );
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY is not configured.");
      return NextResponse.json(
        {
          success: false,
          error: "Security verification is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    const verificationPayload = new URLSearchParams({
      secret: secretKey,
      response: turnstileToken,
    });
    const remoteIp =
      request.headers.get("CF-Connecting-IP") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

    if (remoteIp) {
      verificationPayload.set("remoteip", remoteIp);
    }

    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verificationPayload,
        cache: "no-store",
      }
    );

    if (!verificationResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Security verification is temporarily unavailable.",
        },
        { status: 502 }
      );
    }

    const verification =
      (await verificationResponse.json()) as TurnstileVerification;

    if (
      !verification.success ||
      verification.action !== "vendor_application"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Security verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    const result = await submitVendorApplication(applicationData);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
