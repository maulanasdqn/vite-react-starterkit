import { postAuthLogin } from "@/api/iam/auth/api";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { TResponseError } from "@/entities/types/error";
import type {
  TAuthLoginRequest,
  TAuthLoginResponse,
} from "@/api/iam/auth/type";

export const usePostAuthLogin = (): UseMutationResult<
  TAuthLoginResponse,
  TResponseError,
  TAuthLoginRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-auth-login"],
    mutationFn: async (payload) => await postAuthLogin(payload),
  });
};
