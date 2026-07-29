import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-schema";
import { SITE } from "@/lib/constants";

export type SubmitContactResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(
  data: ContactFormData
): Promise<SubmitContactResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please correct the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  if (parsed.data.website) {
    return { success: true };
  }

  const payload = { ...parsed.data };
  delete payload.website;

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured for contact submissions.");
    return {
      success: false,
      error: `Online requests are temporarily unavailable. Please email ${SITE.salesEmail}.`,
    };
  }

  const message = [
    "New Service Request",
    "",
    `Name: ${payload.name}`,
    `Company: ${payload.company || "Not provided"}`,
    `Work email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Urgency: ${payload.urgency}`,
    "",
    "Request details:",
    payload.message,
  ].join("\n");
  const subjectName = payload.name.replace(/[\r\n]+/g, " ").slice(0, 80);

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FORM_FROM_EMAIL ??
        "Provisioned Services Website <website@provisioned.net>",
      to: [SITE.salesEmail],
      reply_to: payload.email,
      subject: `Service Request — ${payload.urgency} — ${subjectName}`,
      text: message,
    }),
  });

  if (!emailResponse.ok) {
    const responseBody = await emailResponse.text();
    console.error(
      `[Contact Email Error] ${emailResponse.status}: ${responseBody.slice(0, 1000)}`
    );
    return {
      success: false,
      error: `We could not send your request. Please email ${SITE.salesEmail}.`,
    };
  }

  return { success: true };
}
