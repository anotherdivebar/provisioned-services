import { NextResponse } from "next/server";
import { submitContact } from "@/lib/submit-contact";
import type { ContactFormData } from "@/lib/schemas/contact-schema";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const result = await submitContact(body);

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
