import type { FC, ReactElement } from "react";
import { Outlet } from "react-router";

export const PublicLayout: FC = (): ReactElement => {
  return (
    <section className="flex bg-gray-50 w-full items-start justify-between min-h-screen">
      <div className="flex w-full">
        <Outlet />
      </div>
      <div className="flex w-full h-screen bg-white">waduh</div>
    </section>
  );
};

export default PublicLayout;
