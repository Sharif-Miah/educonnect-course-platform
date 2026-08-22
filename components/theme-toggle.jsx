"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 animate-pulse",
          className
        )}
      />
    );
  }

  const isDark = (theme === "dark") || (theme === "system" && resolvedTheme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Dark and Light Mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden group",
        "bg-slate-100 hover:bg-slate-200/90 text-slate-700 border border-slate-200/80 shadow-xs",
        "dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-amber-300 dark:border-slate-700 dark:shadow-inner",
        className
      )}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon (Visible in Light Mode) */}
        <Sun
          className={cn(
            "w-4 h-4 text-amber-500 transition-all duration-500 transform absolute",
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />

        {/* Moon Icon (Visible in Dark Mode) */}
        <Moon
          className={cn(
            "w-4 h-4 text-indigo-300 transition-all duration-500 transform absolute",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
}
