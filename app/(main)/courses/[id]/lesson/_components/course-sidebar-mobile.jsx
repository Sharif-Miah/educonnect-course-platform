"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookOpen } from "lucide-react";

export const CourseSidebarMobile = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 transition cursor-pointer"
          aria-label="Open Course Menu"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-80 sm:w-96 max-w-full overflow-y-auto">
        {children}
      </SheetContent>
    </Sheet>
  );
};
