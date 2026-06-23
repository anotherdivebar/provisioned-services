import {
  vendorApplicationSchema,
  type VendorApplicationFormData,
} from "@/lib/schemas/vendor-application-schema";

export type SubmitVendorApplicationResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitVendorApplication(
  data: VendorApplicationFormData
): Promise<SubmitVendorApplicationResult> {
  const parsed = vendorApplicationSchema.safeParse(data);

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
  // TODO: Wire file uploads to Supabase Storage, S3, UploadThing, or similar
  console.log("[Vendor Application]", JSON.stringify(payload, null, 2));

  return { success: true };
}
