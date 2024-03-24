import z from "zod";

export const postUserSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is requered",
    }),
    edad: z
      .optional(z.number().min(0, "Edad must be greater than 0"))
      .nullable()
      .default(null),
    email: z
      .string({
        invalid_type_error: "Email must be a string",
        required_error: "Email is requered",
      })
      .email("Email is not valid"),
    password: z
      .string({
        invalid_type_error: "Password must be a string",
        required_error: "Password is requered",
      })
      .min(6, "Password must be at least 6 characters"),
  }),
});

export type postUserBody = z.infer<typeof postUserSchema>["body"];

export const postLoginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is requered",
        invalid_type_error: "Email must be a string",
      })
      .email({
        message: "Email is not valid",
      }),
    password: z
      .string({
        required_error: "Password is requered",
        invalid_type_error: "Password must be a string",
      })
      .min(6, "Password must be at least 6 characters"),
  }),
});

export type postLoginBody = z.infer<typeof postLoginSchema>["body"];
