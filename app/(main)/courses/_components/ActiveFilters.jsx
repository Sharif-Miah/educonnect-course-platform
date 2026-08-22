"use client";

import { X, RotateCcw } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const ActiveFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const selectedCategories = searchParams.get("category")
    ? searchParams.get("category").split(",").filter(Boolean)
    : [];

  const selectedPrices = searchParams.get("price")
    ? searchParams.get("price").split(",").filter(Boolean)
    : [];

  const searchTerm = searchParams.get("search") || "";

  const removeCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    const updated = selectedCategories.filter((c) => c !== cat);
    if (updated.length > 0) {
      params.set("category", updated.join(","));
    } else {
      params.delete("category");
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const removePrice = (p) => {
    const params = new URLSearchParams(searchParams);
    const updated = selectedPrices.filter((x) => x !== p);
    if (updated.length > 0) {
      params.set("price", updated.join(","));
    } else {
      params.delete("price");
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const removeSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const clearAll = () => {
    startTransition(() => {
      router.push(pathname);
    });
  };

  const hasAnyFilter = selectedCategories.length > 0 || selectedPrices.length > 0 || searchTerm;

  if (!hasAnyFilter) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap py-2">
      <span className="text-xs font-bold text-slate-400 mr-1">Active Filters:</span>
      
      {/* Search Term Badge */}
      {searchTerm && (
        <button
          onClick={removeSearch}
          className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-[#4A3AFF] dark:text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-200/60 dark:border-indigo-800 transition cursor-pointer"
        >
          <span>Keyword: "{searchTerm}"</span>
          <X className="w-3 h-3 text-[#4A3AFF] dark:text-indigo-300" />
        </button>
      )}

      {/* Category Badges */}
      {selectedCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => removeCategory(cat)}
          className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-800 text-slate-700 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 transition capitalize cursor-pointer"
        >
          <span>{cat.replace(/-/g, " ")}</span>
          <X className="w-3 h-3" />
        </button>
      ))}

      {/* Price Badges */}
      {selectedPrices.map((p) => (
        <button
          key={p}
          onClick={() => removePrice(p)}
          className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-800 text-slate-700 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 transition capitalize cursor-pointer"
        >
          <span>{p} courses</span>
          <X className="w-3 h-3" />
        </button>
      ))}

      {/* Clear All Button */}
      <button
        onClick={clearAll}
        className="text-xs font-bold text-rose-500 hover:underline ml-2 cursor-pointer"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;