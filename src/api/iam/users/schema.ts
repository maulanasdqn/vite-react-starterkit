import { z } from "zod";

const userBaseSchema = {
  fullname: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  role_id: z.string(),
};

export const usersCreateSchema = z
  .object({
    ...userBaseSchema,
    password: z.string(),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password and password confirmation must match",
  });

export const usersUpdateSchema = z
  .object({
    id: z.string(),
    ...userBaseSchema,
    password: z.string().optional(),
    password_confirmation: z.string().optional(),
  })
  .refine(
    (data) =>
      !data.password ||
      !data.password_confirmation ||
      data.password === data.password_confirmation,
    {
      message: "Password and password confirmation must match",
    },
  );
