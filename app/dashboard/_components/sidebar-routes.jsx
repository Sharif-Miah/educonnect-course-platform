"use client";

import { LayoutDashboard, BookOpen, PlusCircle, Radio, HelpCircle, ArrowLeft } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";

const routes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    label: "All Courses",
    href: "/dashboard/courses",
  },
  {
    icon: PlusCircle,
    label: "Create Course",
    href: "/dashboard/courses/add",
  },
  {
    icon: Radio,
    label: "Live Classes",
    href: "/dashboard/lives",
  },
  {
    icon: HelpCircle,
    label: "Quiz Sets",
    href: "/dashboard/quiz-sets",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between pb-6">
      <div className="flex flex-col w-full space-y-1">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>

      {/* Back to Public Website Link */}
      <div className="px-3 pt-6 border-t border-slate-100 mt-auto">
        <Link
          href="/"
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-bold text-slate-500 hover:text-[#4A3AFF] hover:bg-indigo-50/60 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Main Site</span>
        </Link>
      </div>
    </div>
  );
};
