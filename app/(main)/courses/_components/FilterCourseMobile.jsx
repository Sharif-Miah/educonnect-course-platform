"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, RotateCcw } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

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

const FilterCourseMobile = ({ categories = DEFAULT_CATEGORIES }) => {
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
    startTransition(() => {
      router.push(pathname);
    });
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="p-2.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-700 shadow-xs hover:bg-slate-50">
          <Filter className="w-5 h-5 text-[#4A3AFF]" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white p-6 overflow-y-auto">
          <SheetHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100 mb-2">
            <SheetTitle className="text-left text-lg font-bold text-slate-900">
              Filter Courses
            </SheetTitle>
            <button
              onClick={clearAllFilters}
              className="text-xs font-bold text-[#4A3AFF] hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </SheetHeader>

          <Accordion defaultValue={["categories", "price"]} type="multiple" className="w-full">
            <AccordionItem value="categories" className="border-b border-slate-100">
              <AccordionTrigger className="hover:no-underline py-3 text-sm font-bold text-slate-900">
                Categories
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1">
                <ul className="space-y-2.5">
                  {categories.map((cat, idx) => {
                    const slug = cat.value || cat.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") || `cat-${idx}`;
                    const label = cat.label || cat.title;
                    const isChecked = selectedCategories.includes(slug);

                    return (
                      <li key={slug} className="flex items-center">
                        <label
                          htmlFor={`mobile-cat-${slug}`}
                          className="flex items-center gap-2.5 text-sm font-medium text-slate-600 cursor-pointer w-full py-0.5"
                        >
                          <Checkbox
                            id={`mobile-cat-${slug}`}
                            checked={isChecked}
                            onCheckedChange={() => toggleCategory(slug)}
                            className="data-[state=checked]:bg-[#4A3AFF] data-[state=checked]:border-[#4A3AFF]"
                          />
                          <span>{label}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price" className="border-none">
              <AccordionTrigger className="hover:no-underline py-3 text-sm font-bold text-slate-900">
                Price
              </AccordionTrigger>
              <AccordionContent className="pb-2 pt-1">
                <ul className="space-y-2.5">
                  {PRICE_OPTIONS.map((opt) => {
                    const isChecked = opt.value === "all" 
                      ? selectedPrices.length === 0 
                      : selectedPrices.includes(opt.value);

                    return (
                      <li key={opt.value} className="flex items-center">
                        <label
                          htmlFor={`mobile-price-${opt.value}`}
                          className="flex items-center gap-2.5 text-sm font-medium text-slate-600 cursor-pointer w-full py-0.5"
                        >
                          <Checkbox
                            id={`mobile-price-${opt.value}`}
                            checked={isChecked}
                            onCheckedChange={() => togglePrice(opt.value)}
                            className="data-[state=checked]:bg-[#4A3AFF] data-[state=checked]:border-[#4A3AFF]"
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FilterCourseMobile;