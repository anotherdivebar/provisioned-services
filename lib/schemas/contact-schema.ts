import { z } from "zod";
import { INDUSTRY_OPTIONS, URGENCY_OPTIONS } from "@/lib/constants";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone number is required"),
  locations: z.string().min(1, "Number of locations is required"),
  industry: z.enum(INDUSTRY_OPTIONS, {
    message: "Please select an industry",
  }),
  serviceNeed: z.string().min(5, "Please describe your service need"),
  urgency: z.enum(URGENCY_OPTIONS, {
    message: "Please select urgency",
  }),
  message: z.string().min(10, "Please provide additional details"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
