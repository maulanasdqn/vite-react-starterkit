import type {
  TResponseDetail,
  TResponseMessage,
} from "@/entities/types/response";
import type { z } from "zod";
import type {
  authForgotSchema,
  authLoginSchema,
  authRegisterSchema,
} from "./schema";

export type TTokenItem = {
  access_token: string;
  refresh_token: string;
};

export type TAuthLoginItem = {
  user: unknown;
  token: TTokenItem;
};

export type TAuthLoginResponse = TResponseDetail<TAuthLoginItem>;
export type TAuthLoginRequest = z.infer<typeof authLoginSchema>;

export type TAuthRegisterResponse = TResponseMessage;
export type TAuthRegisterRequest = z.infer<typeof authRegisterSchema>;

export type TAuthForgotResponse = TResponseMessage;
export type TAuthForgotRequest = z.infer<typeof authForgotSchema>;
