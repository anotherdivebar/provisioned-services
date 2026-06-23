import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-schema";

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

  // TODO: Connect to Supabase, Resend, HubSpot, Zoho, Airtable, or email notification
  console.log("[Contact Submission]", JSON.stringify(payload, null, 2));

  return { success: true };
}
