import { PERMISSIONS } from "./permissions";
import { ROUTES } from "./routes";

export const mappingRoutePermissions = [
  {
    path: ROUTES.DASHBOARD,
    permissions: [PERMISSIONS.DASHBOARD.READ_DASHBOARD],
  },
  {
    path: ROUTES.IAM.USERS.LIST,
    permissions: [PERMISSIONS.USERS.READ_LIST_USERS],
  },
  {
    path: ROUTES.IAM.USERS.CREATE,
    permissions: [PERMISSIONS.USERS.CREATE_USERS],
  },
  {
    path: ROUTES.IAM.USERS.UPDATE,
    permissions: [PERMISSIONS.USERS.UPDATE_USERS],
  },
  {
    path: ROUTES.IAM.USERS.DETAIL,
    permissions: [PERMISSIONS.USERS.READ_DETAIL_USERS],
  },
];
