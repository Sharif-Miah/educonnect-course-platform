"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Filter, RotateCcw } from "lucide-react";

const PRICE_OPTIONS = [
  { label: "All Prices", value: "all" },
  { label: "Free Courses", value: "free" },
  { label: "Paid Courses", value: "paid" },
];

const DEFAULT_CATEGORIES = [
  { label: "Design & UX", value: "design" },
  { label: "Development", value: "development" },
  { label: "Marketing", value: "marketing" },
  { label: "IT & Software", value: "it-software" },
  { label: "Personal Development", value: "personal-development" },
  { label: "Business & Finance", value: "business" },
  { label: "Photography & Video", value: "photography" },
  { label: "Music & Audio", value: "music" },
];

const FilterCourse = ({ categories = DEFAULT_CATEGORIES }) => {
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

  const toggleCategory = (slug) => {
    const params = new URLSearchParams(searchParams);
    let newCategories = [...selectedCategories];
    
    if (newCategories.includes(slug)) {
      newCategories = newCategories.filter((c) => c !== slug);
    } else {
      newCategories.push(slug);
    }

    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","));
    } else {
      params.delete("category");
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const togglePrice = (val) => {
    const params = new URLSearchParams(searchParams);
    let newPrices = [...selectedPrices];

    if (val === "all") {
      newPrices = [];
      params.delete("price");
    } else {
      if (newPrices.includes(val)) {
        newPrices = newPrices.filter((p) => p !== val);
      } else {
        newPrices.push(val);
      }

      if (newPrices.length > 0) {
        params.set("price", newPrices.join(","));
      } else {
        params.delete("price");
      }
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const clearAllFilters = () => {
    const params = new URLSearchParams();
    startTransition(() => {
      router.push(pathname);
    });
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPrices.length > 0 || searchParams.has("search");

  return (
    <div className="hidden lg:block bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100/90 dark:border-slate-800 sticky top-24 transition-colors">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800 mb-2">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#4A3AFF]" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            Filters
          </h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-bold text-[#4A3AFF] dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <Accordion defaultValue={["categories", "price"]} type="multiple" className="w-full">
        
        {/* Categories Section */}
        <AccordionItem value="categories" className="border-b border-slate-100 dark:border-slate-800">
          <AccordionTrigger className="hover:no-underline py-4 text-sm font-bold text-slate-900 dark:text-white">
            Categories
          </AccordionTrigger>
          <AccordionContent className="pb-4 pt-1">
            <ul className="space-y-2.5">
              {categories.map((cat, idx) => {
                const slug = cat.value || cat.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") || `cat-${idx}`;
                const label = cat.label || cat.title;
                const isChecked = selectedCategories.includes(slug);

                return (
                  <li key={slug} className="flex items-center justify-between group">
                    <label
                      htmlFor={`cat-${slug}`}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#4A3AFF] cursor-pointer w-full py-0.5 select-none"
                    >
                      <Checkbox
                        id={`cat-${slug}`}
                        checked={isChecked}
                        onCheckedChange={() => toggleCategory(slug)}
                        className="data-[state=checked]:bg-[#4A3AFF] data-[state=checked]:border-[#4A3AFF] rounded-md border-slate-300 dark:border-slate-700"
                      />
                      <span>{label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Price Section */}
        <AccordionItem value="price" className="border-none">
          <AccordionTrigger className="hover:no-underline py-4 text-sm font-bold text-slate-900 dark:text-white">
            Price
          </AccordionTrigger>
          <AccordionContent className="pb-2 pt-1">
            <ul className="space-y-2.5">
              {PRICE_OPTIONS.map((opt) => {
                const isChecked = opt.value === "all" 
                  ? selectedPrices.length === 0 
                  : selectedPrices.includes(opt.value);

                return (
                  <li key={opt.value} className="flex items-center justify-between group">
                    <label
                      htmlFor={`price-${opt.value}`}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#4A3AFF] cursor-pointer w-full py-0.5 select-none"
                    >
                      <Checkbox
                        id={`price-${opt.value}`}
                        checked={isChecked}
                        onCheckedChange={() => togglePrice(opt.value)}
                        className="data-[state=checked]:bg-[#4A3AFF] data-[state=checked]:border-[#4A3AFF] rounded-md border-slate-300 dark:border-slate-700"
                      />
                      <span>{opt.label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    </div>
  );
};

export default FilterCourse;
