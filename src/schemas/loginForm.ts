import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type loginFormType = z.infer<typeof loginFormSchema>;
