import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { ROUTES } from "./entities/constants/routes";
import { SessionUser } from "@/libs/local-storage/session-user";
import { SessionToken } from "@/libs/cookie/session-token";
import { mappingRoutePermissions } from "./entities/constants/mapping-route-permissions";
import { mappingPublicRoutes } from "./entities/constants/mapping-route-public";
import { redirectToFirstAccessibleRoute } from "./utils/redirect-to-first-accessible-route";

export const middleware = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const session = SessionUser.get();
  const session_token = SessionToken.get();
  const token = session_token?.token?.access_token;
  const userPermissions =
    session?.user?.role.permissions.map((perm) => perm.name) ?? [];

  if (mappingPublicRoutes.includes(pathname)) {
    if (token) return redirect(ROUTES.DASHBOARD);
    return null;
  }

  if (!session) return redirect(ROUTES.AUTH.LOGIN);

  const matchedRoute = mappingRoutePermissions.find(
    (route) => route.path === pathname,
  );

  if (matchedRoute) {
    const hasPermission =
      !matchedRoute.permissions ||
      matchedRoute.permissions.some((perm) => userPermissions.includes(perm));

    if (!hasPermission) {
      return redirectToFirstAccessibleRoute(userPermissions);
    }
  }

  return null;
};
