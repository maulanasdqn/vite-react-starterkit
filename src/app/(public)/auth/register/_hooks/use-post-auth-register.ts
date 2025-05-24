import { postAuthRegister } from "@/api/iam/auth/api";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { TResponseError } from "@/entities/types/error";
import type {
  TAuthRegisterRequest,
  TAuthRegisterResponse,
} from "@/api/iam/auth/type";

export const usePostAuthRegister = (): UseMutationResult<
  TAuthRegisterResponse,
  TResponseError,
  TAuthRegisterRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-auth-register"],
    mutationFn: async (payload) => await postAuthRegister(payload),
  });
};
