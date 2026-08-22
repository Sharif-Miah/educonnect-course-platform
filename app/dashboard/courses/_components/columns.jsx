"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { GraduationCap, Star, ArrowUpDown, MoreHorizontal, Pencil, Eye, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#4A3AFF] dark:hover:text-indigo-400 transition py-2"
        >
          <span>Course Title</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const id = row.original._id || row.original.id;
      const title = row.getValue("title");
      return (
        <Link
          href={`/dashboard/courses/${id}`}
          className="font-bold text-slate-900 dark:text-white hover:text-[#4A3AFF] dark:hover:text-indigo-400 transition line-clamp-1 max-w-md block"
        >
          {title}
        </Link>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#4A3AFF] dark:hover:text-indigo-400 transition py-2"
        >
          <span>Price</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const price = row.getValue("price");
      const formatted = formatPrice(price);
      const isFree = Number(price) === 0;

      return (
        <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
          isFree 
            ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" 
            : "text-slate-900 dark:text-slate-100 bg-slate-100/80 dark:bg-slate-800"
        }`}>
          {isFree ? "Free" : formatted}
        </span>
      );
    },
  },
  {
    accessorKey: "active",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#4A3AFF] dark:hover:text-indigo-400 transition py-2"
        >
          <span>Status</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const active = row.getValue("active") || false;

      return active ? (
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 px-3 py-1 rounded-full text-xs font-bold w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Published</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span>Draft</span>
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original._id || row.original.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-8 h-8 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition cursor-pointer">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-slate-900 rounded-2xl p-1.5 shadow-xl border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-slate-100">
            <Link href={`/dashboard/courses/${id}`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 focus:bg-indigo-50 dark:focus:bg-slate-800 focus:text-[#4A3AFF] dark:focus:text-indigo-400">
                <Pencil className="w-3.5 h-3.5 mr-2" />
                Edit Curriculum
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/courses/${id}/enrollments`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 focus:bg-indigo-50 dark:focus:bg-slate-800 focus:text-[#4A3AFF] dark:focus:text-indigo-400">
                <GraduationCap className="w-3.5 h-3.5 mr-2" />
                Student Enrollments
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/courses/${id}/reviews`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 focus:bg-indigo-50 dark:focus:bg-slate-800 focus:text-[#4A3AFF] dark:focus:text-indigo-400">
                <Star className="w-3.5 h-3.5 mr-2 text-amber-500 fill-amber-500" />
                Student Reviews
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
