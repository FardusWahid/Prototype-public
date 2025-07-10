import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be less than 30 characters"),
  phone: z
    .string()
    .regex(
      /^(017|013|019|016)\d{8}$/,
      "Only Grameenphone, Banglalink, and Airtel numbers are allowed"
    ),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
