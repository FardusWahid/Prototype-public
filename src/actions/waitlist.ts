"use server";
import { connect } from "@/database/connect";
import { waitlist } from "@/database/schema";
import { waitlistSchema, type WaitlistFormData } from "@/types/validation";
import { eq } from "drizzle-orm";

export type ActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function joinWaitlist(
  formData: WaitlistFormData
): Promise<ActionResult> {
  try {
    const validation = waitlistSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const field = issue.path[0] as any;
        fieldErrors[field] = issue.message;
      }
      return {
        success: false,
        message: "Validation failed",
        errors: fieldErrors,
      };
    }

    const { name, phone } = validation.data;

    const existingUser = await connect
      .select()
      .from(waitlist)
      .where(eq(waitlist.phone, phone))
      .limit(1);

    if (existingUser.length > 0) {
      return {
        success: false,
        message: "This phone number is already on the waitlist",
        errors: { phone: "This phone number is already registered" },
      };
    }

    await connect.insert(waitlist).values({
      name,
      phone,
    });

    return {
      success: true,
      message:
        "Successfully joined the waitlist! 🎉 We'll notify you as soon as we launch.",
    };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
