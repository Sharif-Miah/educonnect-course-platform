"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Palette, DollarSign, Megaphone, Smartphone, Database, Film, HeartPulse } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

// Default category icons mapping
const iconMap = {
  "Art & Design": Palette,
  "Design": Palette,
  "Web Development": Code,
  "Development": Code,
  "Finance Account": DollarSign,
  "Finance": DollarSign,
  "Marketing": Megaphone,
  "Mobile Application": Smartphone,
  "Data Science": Database,
  "Health and Fitness": HeartPulse,
  "3D Animation": Film,
};

// Default stock category background images for hover effect
const categoryBgImages = {
  "Art & Design": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "Design": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  "Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  "Finance Account": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  "Finance": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  "Marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "Mobile Application": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  "Data Science": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  "Health and Fitness": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  "3D Animation": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
};

export default function CategorySection({ categories = [] }) {
  // Use database categories or fallback to rich mock data if empty
  const defaultCategories = [
    { id: "1", title: "Art & Design", count: 5, icon: Palette, bg: categoryBgImages["Art & Design"] },
    { id: "2", title: "Web Development", count: 10, icon: Code, bg: categoryBgImages["Web Development"] },
    { id: "3", title: "Finance Account", count: 6, icon: DollarSign, bg: categoryBgImages["Finance Account"] },
    { id: "4", title: "Marketing", count: 3, icon: Megaphone, bg: categoryBgImages["Marketing"] },
    { id: "5", title: "Mobile Application", count: 8, icon: Smartphone, bg: categoryBgImages["Mobile Application"] },
    { id: "6", title: "Data Science", count: 4, icon: Database, bg: categoryBgImages["Data Science"] },
    { id: "7", title: "Health and Fitness", count: 8, icon: HeartPulse, bg: categoryBgImages["Health and Fitness"] },
    { id: "8", title: "3D Animation", count: 4, icon: Film, bg: categoryBgImages["3D Animation"] },
  ];

  const displayCategories = categories.length > 0
    ? categories.map((cat, idx) => {
        const title = cat.title || "Category";
        const IconComp = iconMap[title] || Palette;
        const bg = cat.thumbnail ? getImageUrl(cat.thumbnail, "categories") : (categoryBgImages[title] || defaultCategories[idx % defaultCategories.length].bg);
        return {
          id: cat.id || cat._id,
          title: title,
          count: cat.courseCount || (idx % 5 + 3),
          icon: IconComp,
          bg: bg,
        };
      })
    : defaultCategories;

  return (
    <section id="categories" className="py-20 bg-slate-50/60 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
            TOP CATEGORY
          </p>
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Browse Our Online Course <br className="hidden sm:inline" />
              Categories
            </h2>
            {/* Hand-drawn blue wavy underline accent */}
            <div className="flex justify-center mt-2">
              <svg className="w-28 sm:w-36 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Categories Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id || idx}
                href={`/categories/${item.id}`}
                className="group relative h-28 sm:h-32 rounded-2xl p-5 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 overflow-hidden flex items-center justify-between"
              >
                {/* Background image on hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={item.bg}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50/80 group-hover:bg-white/20 backdrop-blur-sm border border-indigo-100/60 group-hover:border-white/30 flex items-center justify-center text-[#4A3AFF] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Count */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="mt-1">
                      <span className="inline-block text-xs font-semibold text-[#4A3AFF] group-hover:text-white bg-indigo-50 group-hover:bg-[#4A3AFF] px-2.5 py-0.5 rounded-full transition-all duration-200">
                        {item.count} Courses
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="relative z-10 w-9 h-9 rounded-full bg-slate-50 group-hover:bg-[#4A3AFF] border border-slate-200 group-hover:border-transparent flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Categories CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
