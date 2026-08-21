"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const SidebarItem = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Precise route matching so only ONE menu item is active at a time
  let isActive = false;

  if (href === "/dashboard") {
    isActive = pathname === "/dashboard";
  } else if (href === "/dashboard/courses/add") {
    isActive = pathname === "/dashboard/courses/add";
  } else if (href === "/dashboard/courses") {
    isActive = pathname === "/dashboard/courses" || (pathname?.startsWith("/dashboard/courses/") && pathname !== "/dashboard/courses/add");
  } else if (href === "/dashboard/lives/add") {
    isActive = pathname === "/dashboard/lives/add";
  } else if (href === "/dashboard/lives") {
    isActive = pathname === "/dashboard/lives" || (pathname?.startsWith("/dashboard/lives/") && pathname !== "/dashboard/lives/add");
  } else if (href === "/dashboard/quiz-sets/add") {
    isActive = pathname === "/dashboard/quiz-sets/add";
  } else if (href === "/dashboard/quiz-sets") {
    isActive = pathname === "/dashboard/quiz-sets" || (pathname?.startsWith("/dashboard/quiz-sets/") && pathname !== "/dashboard/quiz-sets/add");
  } else {
    isActive = pathname === href;
  }

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-3 text-xs sm:text-sm font-bold px-4 py-3 mx-3 my-1 rounded-2xl transition-all duration-200 group text-left select-none cursor-pointer",
        isActive
          ? "bg-[#4A3AFF] text-white shadow-lg shadow-indigo-500/25"
          : "text-slate-600 hover:text-[#4A3AFF] hover:bg-indigo-50/70"
      )}
    >
      <Icon
        className={cn(
          "w-4 h-4 transition-transform group-hover:scale-110 flex-shrink-0",
          isActive ? "text-white" : "text-slate-400 group-hover:text-[#4A3AFF]"
        )}
      />
      <span className="whitespace-nowrap font-bold">{label}</span>
    </button>
  );
};
