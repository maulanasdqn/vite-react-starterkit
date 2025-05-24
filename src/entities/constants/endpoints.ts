export const ENDPOINTS = {
  DASHBOARD: "/dashboard",
  AUTH: {
    LOGIN: "/auth/login",
    FORGOT: "/auth/forgot",
    REGISTER: "/auth/register",
  },
  IAM: {
    USERS: {
      LIST: "/users/list",
      DETAIL: "/users/detail/:id",
      CREATE: "/users/create",
      UPDATE: "/users/update/:id",
      DELETE: "/users/delete/:id",
    },
  },
};
