import { z } from "zod";

export const authLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const authRegisterSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string(),
});

export const authForgotSchema = z.object({
  email: z.string().email(),
});
