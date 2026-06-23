import { NextResponse } from "next/server";
import { submitVendorApplication } from "@/lib/submit-vendor-application";
import type { VendorApplicationFormData } from "@/lib/schemas/vendor-application-schema";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as VendorApplicationFormData;
    const result = await submitVendorApplication(body);

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
