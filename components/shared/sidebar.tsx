import SidebarHeader from "./sidebar/header";
import { useOrganizations } from "@/hooks/use-org";
import SidebarRoutes from "./sidebar/sidebar-routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const Sidebar = async () => {
  const organizations = await useOrganizations();

  return (
    <aside className="flex-1 max-w-xs sticky top-0 h-screen border-x dark:border-neutral-700  border-border p-5 flex flex-col ">
      <div className="flex flex-1 flex-col gap-10 ">
        <SidebarHeader organizations={organizations} />
        <SidebarRoutes organizations={organizations} />
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default Sidebar;
