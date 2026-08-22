import { Logo } from "@/components/logo";
import { SidebarRoutes } from "./sidebar-routes";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full border-r border-slate-200/80 dark:border-slate-800 flex flex-col overflow-y-auto bg-white dark:bg-[#0b1120] shadow-sm transition-colors">
      <div className="p-6 border-b border-slate-100 dark:border-slate-850">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col w-full py-4">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
