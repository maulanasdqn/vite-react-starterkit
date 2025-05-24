import type { FC, ReactElement } from "react";
import { Outlet } from "react-router";

export const ProtectedLayout: FC = (): ReactElement => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
