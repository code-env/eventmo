import { useMemo } from "react";
import { Settings2, Layers2, Activity } from "lucide-react";

export const sidebarRoutes = (key: string) => {
  const routes = useMemo(
    () => [
      {
        label: "Events",
        href: `/manage/${key}`,
        icon: "Layers2",
      },
      {
        label: "Activities",
        href: `/manage/${key}/activities`,
        icon: "Activity",
      },
      {
        label: "Settings",
        href: `/manage/${key}/settings`,
        icon: "Settings2",
      },
      {
        label: "Billing",
        href: `/manage/${key}/billing`,
        icon: "CreditCard",
      },
    ],
    []
  );

  return routes;
};
