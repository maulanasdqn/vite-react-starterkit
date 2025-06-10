import type { TUserItem } from "@/api/iam/users/type";

type TStoredUser = {
  user?: TUserItem;
};

export const SessionUser = {
  set: (val: TStoredUser) => localStorage.setItem("users", JSON.stringify(val)),
  get: (): TStoredUser | undefined => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : undefined;
  },
  remove: () => localStorage.removeItem("users"),
};
