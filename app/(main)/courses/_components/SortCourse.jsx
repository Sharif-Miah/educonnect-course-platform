"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ArrowUpDown } from "lucide-react";

const SORT_OPTIONS = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const SortCourse = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSort = searchParams.get("sort") || "popular";

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "popular") {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px] sm:w-[200px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] shadow-xs">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#4A3AFF] dark:text-indigo-400" />
            <SelectValue placeholder="Sort By" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-1">
          <SelectGroup>
            <SelectLabel className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
              Sort Courses
            </SelectLabel>
            {SORT_OPTIONS.map((option) => (
              <SelectItem
                className="cursor-pointer text-xs sm:text-sm font-medium rounded-xl py-2 px-3 focus:bg-indigo-50 dark:focus:bg-slate-800 focus:text-[#4A3AFF] dark:focus:text-indigo-300 text-slate-700 dark:text-slate-200"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCourse;