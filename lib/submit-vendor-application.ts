import {
  vendorApplicationSchema,
} from "@/lib/schemas/vendor-application-schema";
import { SITE } from "@/lib/constants";

export type SubmitVendorApplicationResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function submitVendorApplication(
  data: unknown
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

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured for vendor applications.");
    return {
      success: false,
      error: `Online applications are temporarily unavailable. Please email ${SITE.email}.`,
    };
  }

  const message = [
    "New Vendor Application",
    "",
    "Company Information",
    `Company name: ${payload.companyName}`,
    `DBA: ${payload.dba || "Not provided"}`,
    `Website: ${payload.companyWebsite || "Not provided"}`,
    `Primary contact: ${payload.contactName}`,
    `Contact title: ${payload.contactTitle}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Address: ${payload.streetAddress}, ${payload.city}, ${payload.state} ${payload.zip}`,
    `Service radius / coverage: ${payload.serviceRadius}`,
    `States served: ${payload.statesServed}`,
    "",
    "Business Details",
    `Years in business: ${payload.yearsInBusiness}`,
    `Employees / technicians: ${payload.employeeCount}`,
    `Business type: ${payload.businessType}`,
    `Licensed: ${payload.licensed}`,
    `License numbers / states: ${payload.licenseDetails || "Not provided"}`,
    `Insured: ${payload.insured}`,
    `General liability coverage: ${payload.liabilityCoverage || "Not provided"}`,
    `Workers comp: ${payload.workersComp}`,
    `Can provide COI: ${payload.canProvideCoi}`,
    `W-9 available: ${payload.w9Available}`,
    "",
    "Services & Trades",
    payload.trades.join(", "),
    "",
    "Operational Fit",
    `Emergency response: ${payload.emergencyResponse}`,
    `Typical response time: ${payload.typicalResponseTime || "Not provided"}`,
    `After hours: ${payload.afterHours}`,
    `Weekends: ${payload.weekends}`,
    `Willing to travel: ${payload.willingToTravel}`,
    `Active business environments: ${payload.activeBusinessEnvironments}`,
    `Restaurant experience: ${payload.restaurantExperience}`,
    `Retail experience: ${payload.retailExperience}`,
    `Multi-site experience: ${payload.multiSiteExperience}`,
    "",
    "Experience",
    payload.experienceDescription,
    "",
    "Acknowledgements",
    `Information confirmed accurate: ${payload.confirmAccurate ? "yes" : "no"}`,
    `Understands application does not guarantee work: ${payload.understandNoGuarantee ? "yes" : "no"}`,
    `Agrees to be contacted: ${payload.agreeToContact ? "yes" : "no"}`,
  ].join("\n");
  const subjectCompany = payload.companyName
    .replace(/[\r\n]+/g, " ")
    .slice(0, 80);

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FORM_FROM_EMAIL ??
        "Provisioned Services Website <website@send.provisioned.net>",
      to: [SITE.email],
      reply_to: payload.email,
      subject: `Vendor Application - ${subjectCompany}`,
      text: message,
    }),
  });

  if (!emailResponse.ok) {
    const responseBody = await emailResponse.text();
    console.error(
      `[Vendor Application Email Error] ${emailResponse.status}: ${responseBody.slice(0, 1000)}`
    );
    return {
      success: false,
      error: `We could not send your application. Please email ${SITE.email}.`,
    };
  }

  return { success: true };
}
