import { ENDPOINTS } from "@/entities/constants/endpoints";
import type { TMetaRequest } from "@/entities/types/meta";
import { api } from "@/libs/axios";
import { generatePath } from "react-router";
import type {
  TUsersCreateRequest,
  TUsersDetailResponse,
  TUsersListResponse,
  TUsersUpdateRequest,
} from "./type";
import type { TResponseMessage } from "@/entities/types/response";

export const getUsersList = async (
  params: TMetaRequest,
): Promise<TUsersListResponse> => {
  const response = await api({
    method: "GET",
    url: ENDPOINTS.IAM.USERS.LIST,
    params,
  });
  return response.data;
};

export const getUsersDetail = async (
  id?: string,
): Promise<TUsersDetailResponse> => {
  const response = await api({
    method: "GET",
    url: generatePath(ENDPOINTS.IAM.USERS.DETAIL, { id }),
  });
  return response.data;
};

export const postUsersCreate = async (
  payload: TUsersCreateRequest,
): Promise<TResponseMessage> => {
  const response = await api({
    method: "POST",
    url: ENDPOINTS.IAM.USERS.CREATE,
    data: payload,
  });
  return response.data;
};

export const putUsersUpdate = async (
  payload: TUsersUpdateRequest,
): Promise<TResponseMessage> => {
  const response = await api({
    method: "PUT",
    url: generatePath(ENDPOINTS.IAM.USERS.UPDATE, {
      id: payload.id,
    }),
    data: payload,
  });
  return response.data;
};

export const deleteUsersDelete = async (
  id?: string,
): Promise<TResponseMessage> => {
  const response = await api({
    method: "DELETE",
    url: generatePath(ENDPOINTS.IAM.USERS.DELETE, { id }),
  });
  return response.data;
};
