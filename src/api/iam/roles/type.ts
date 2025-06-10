import type { TPermissionItem } from "../permissions/type";

export type TRoleItem = {
  id: string;
  name: string;
  description: string;
  permissions: TPermissionItem[];
  created_at: string;
  updated_at: string;
};
