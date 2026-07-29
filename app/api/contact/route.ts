import { NextResponse } from "next/server";
import { submitContact } from "@/lib/submit-contact";
import type { ContactFormData } from "@/lib/schemas/contact-schema";
import { SITE } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const result = await submitContact(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("[Contact Submission Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: `We could not send your request. Please email ${SITE.salesEmail}.`,
      },
      { status: 500 }
    );
  }
}
