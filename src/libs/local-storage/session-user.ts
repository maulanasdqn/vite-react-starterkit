type TUserItem = {
  id: string;
  role: {
    id: string;
    name: string;
    permissions: Array<{
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
    }>;
    created_at: string;
    updated_at: string;
  };
  fullname: string;
  email: string;
  avatar?: string | null;
  phone_number: string;
  referred_by: string | null;
  referral_code: string | null;
  student_type: string;
  is_active: boolean;
  is_profile_completed: boolean;
  identity_number: string | null;
  religion: string | null;
  gender: string | null;
  birthdate: string | null;
  updated_at: string;
  created_at: string;
};

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
