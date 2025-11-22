import * as z from "zod";

export const onboardingFormSchema = z.object({
  name: z
    .string()
    .includes(" ", { message: "Provide first and last name" })
    .optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 character long" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    })
    .trim(),
});

export type onboardingFormType = z.infer<typeof onboardingFormSchema>;
