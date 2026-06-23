import { z } from "zod";
import { BUSINESS_TYPES, VENDOR_TRADES } from "@/lib/constants";

const yesNoSchema = z.enum(["yes", "no"], {
  message: "Please select yes or no",
});

const yesNoNaSchema = z.enum(["yes", "no", "na"], {
  message: "Please select an option",
});

export const vendorApplicationSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  dba: z.string().optional(),
  contactName: z.string().min(2, "Contact name is required"),
  contactTitle: z.string().min(2, "Contact title is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone number is required"),
  companyWebsite: z.string().optional(),
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(5, "ZIP code is required"),
  serviceRadius: z.string().min(2, "Service radius is required"),
  statesServed: z.string().min(2, "States served is required"),

  yearsInBusiness: z.string().min(1, "Years in business is required"),
  employeeCount: z.string().min(1, "Employee count is required"),
  businessType: z.enum(BUSINESS_TYPES, {
    message: "Please select a business type",
  }),
  licensed: yesNoSchema,
  licenseDetails: z.string().optional(),
  insured: yesNoSchema,
  liabilityCoverage: z.string().optional(),
  workersComp: yesNoNaSchema,
  canProvideCoi: yesNoSchema,
  w9Available: yesNoSchema,

  trades: z
    .array(z.enum(VENDOR_TRADES))
    .min(1, "Select at least one trade or service"),

  emergencyResponse: yesNoSchema,
  typicalResponseTime: z.string().optional(),
  afterHours: yesNoSchema,
  weekends: yesNoSchema,
  willingToTravel: yesNoSchema,
  activeBusinessEnvironments: yesNoSchema,
  restaurantExperience: yesNoSchema,
  retailExperience: yesNoSchema,
  multiSiteExperience: yesNoSchema,
  experienceDescription: z.string().min(20, "Please describe your experience"),

  reference1Company: z.string().min(2, "Reference 1 company is required"),
  reference1Contact: z.string().min(2, "Reference 1 contact is required"),
  reference1Info: z.string().min(5, "Reference 1 phone/email is required"),
  reference2Company: z.string().min(2, "Reference 2 company is required"),
  reference2Contact: z.string().min(2, "Reference 2 contact is required"),
  reference2Info: z.string().min(5, "Reference 2 phone/email is required"),

  confirmAccurate: z.literal(true, {
    message: "You must confirm the information is accurate",
  }),
  understandNoGuarantee: z.literal(true, {
    message: "You must acknowledge this application does not guarantee work",
  }),
  agreeToContact: z.literal(true, {
    message: "You must agree to be contacted about vendor opportunities",
  }),

  website: z.string().max(0, "Invalid submission").optional(),
});

export type VendorApplicationFormData = z.infer<
  typeof vendorApplicationSchema
>;
