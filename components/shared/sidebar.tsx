import SidebarHeader from "./sidebar/header";
import { useOrganizations } from "@/hooks/use-org";
import SidebarRoutes from "./sidebar/sidebar-routes";
import ThemeSwtich from "./theme.switch";

const Sidebar = async () => {
  const organizations = await useOrganizations();

  return (
    <aside className="flex-1 max-w-xs sticky top-0 h-screen border-r p-5 flex flex-col">
      <div className="flex flex-1 flex-col gap-10 ">
        <SidebarHeader organizations={organizations} />
        <SidebarRoutes organizations={organizations} />
      </div>
      <ThemeSwtich />
    </aside>
  );
};

export default Sidebar;
