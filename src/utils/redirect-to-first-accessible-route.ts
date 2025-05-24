import { mappingRoutePermissions } from "@/entities/constants/mapping-route-permissions";
import { ROUTES } from "@/entities/constants/routes";
import { redirect } from "react-router";

export const redirectToFirstAccessibleRoute = (userPermissions: string[]) => {
  const fallback = mappingRoutePermissions.find((route) =>
    route.permissions.some((perm) => userPermissions.includes(perm)),
  );
  return redirect(fallback?.path ?? ROUTES.AUTH.LOGIN);
};
