import type { TResponseDetail, TResponseList } from "@/entities/types/response";
import type { z } from "zod";
import type { usersCreateSchema, usersUpdateSchema } from "./schema";
import type { TRoleItem } from "../roles/type";

export type TUserItem = {
  id: string;
  email: string;
  fullname: string;
  phone_number: string;
  role: TRoleItem;
  created_at: string;
  updated_at: string;
};

export type TUsersListResponse = TResponseList<TUserItem>;

export type TUsersDetailResponse = TResponseDetail<TUserItem>;

export type TUsersCreateRequest = z.infer<typeof usersCreateSchema>;

export type TUsersUpdateRequest = z.infer<typeof usersUpdateSchema>;
