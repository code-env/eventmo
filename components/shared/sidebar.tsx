import SidebarHeader from "./sidebar/header";
import { useOrganizations } from "@/hooks/use-org";
import SidebarRoutes from "./sidebar/sidebar-routes";


const Sidebar = async () => {
  const organizations = await useOrganizations();

  return (
    <aside className="flex-1 max-w-xs sticky top-0 h-screen border-x dark:border-neutral-700  border-border p-5 flex flex-col ">
      <div className="flex flex-1 flex-col gap-10 ">
        <SidebarHeader organizations={organizations} />
        <SidebarRoutes organizations={organizations} />
      </div>
    </aside>
  );
};

export default Sidebar;
