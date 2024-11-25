import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Should be at least 2 characters" })
    .max(30, { message: "Too long" })
    .regex(/^[A-Za-z]+$/, {
      message: "First name must be letters",
    }),
  lastName: z
    .string()
    .min(2, { message: "Should be at least 2 characters" })
    .max(30, { message: "Too long" })
    .regex(/^[A-Za-z]+$/, {
      message: "Last name must be letters",
    }),
  email: z.string().email({ message: "A valid Email is required" }),
  phone: z
    .string()
    .min(8, { message: "An 8-digit phone number is required" })
    .max(8, { message: "A valid phone number is required" })
    .regex(/^[0-9]+$/, {
      message: "Phone number must be numbers",
    }),
  subject: z
    .string()
    .min(3, { message: "Subject is required" })
    .max(30, { message: "Too long" }),
  message: z
    .string()
    .min(3, { message: "Message is required" })
    .max(2500, { message: "Your message is too long" }),
});
