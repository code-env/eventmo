import { useMemo } from "react";

export const sidebarRoutes = (key: string) => {
  const routes = useMemo(
    () => [
      {
        title: "General",
        routes: [
          {
            label: "Dashboard",
            href: `/manage/${key}`,
            icon: "Layers2",
          },
          {
            label: "Activity",
            href: `/manage/${key}/activities`,
            icon: "Activity",
          },
          {
            label: "Settings",
            href: `/manage/${key}/settings`,
            icon: "Settings2",
          },
        ],
      },
      {
        title: "Record",
        routes: [
          {
            label: "people",
            href: `/manage/${key}/people`,
            icon: "Users",
          },
          {
            label: "files",
            href: `/manage/${key}/files`,
            icon: "FolderCog",
          },
          {
            label: "billing",
            href: `/manage/${key}/billing`,
            icon: "CreditCard",
          },
        ],
      },
    ],
    []
  );

  return routes;
};
