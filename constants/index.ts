import { useMemo } from "react";

export const sidebarRoutes = (Id: string) => {
  const routes = useMemo(
    () => [
      {
        label: "Settings",
        href: `/manage/${Id}/settings`,
        icon: "UserCog",
      },
    ],
    []
  );

  return routes;
};

export const apiEndpoint = "https://notpadd.vercel.app/api/public";
