import SidebarHeader from "./sidebar/header";
import { useOrganizations } from "@/hooks/use-org";

const Sidebar = async () => {
  const organizations = await useOrganizations();

  return (
    <div className="flex-1 max-w-xs sticky top-0 h-screen border-r p-5">
      <SidebarHeader organizations={organizations} />
    </div>
  );
};

export default Sidebar;
