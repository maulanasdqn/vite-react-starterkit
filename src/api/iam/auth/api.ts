import { ENDPOINTS } from "@/entities/constants/endpoints";
import { api } from "@/libs/axios";
import type {
  TAuthForgotRequest,
  TAuthForgotResponse,
  TAuthLoginRequest,
  TAuthLoginResponse,
  TAuthRegisterRequest,
  TAuthRegisterResponse,
} from "./type";

export const postAuthLogin = async (
  payload: TAuthLoginRequest,
): Promise<TAuthLoginResponse> => {
  const response = await api({
    method: "POST",
    url: ENDPOINTS.AUTH.LOGIN,
    data: payload,
  });
  return response.data;
};

export const postAuthRegister = async (
  payload: TAuthRegisterRequest,
): Promise<TAuthRegisterResponse> => {
  const response = await api({
    method: "POST",
    url: ENDPOINTS.AUTH.REGISTER,
    data: payload,
  });
  return response.data;
};

export const postAuthForgot = async (
  payload: TAuthForgotRequest,
): Promise<TAuthForgotResponse> => {
  const response = await api({
    method: "POST",
    url: ENDPOINTS.AUTH.FORGOT,
    data: payload,
  });
  return response.data;
};
