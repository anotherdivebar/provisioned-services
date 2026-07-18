import { z } from "zod";
import { URGENCY_OPTIONS } from "@/lib/constants";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  email: z.string().trim().email("Valid email is required"),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || value.replace(/\D/g, "").length >= 7,
      "Enter a valid phone number"
    )
    .optional(),
  urgency: z.enum(URGENCY_OPTIONS, {
    message: "Please select urgency",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about the issue"),
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
