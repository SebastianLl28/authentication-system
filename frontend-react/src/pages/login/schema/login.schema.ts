import z from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid email",
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z
    .string({
      invalid_type_error: "Invalid password",
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});

export type ILogin = z.infer<typeof loginSchema>;
