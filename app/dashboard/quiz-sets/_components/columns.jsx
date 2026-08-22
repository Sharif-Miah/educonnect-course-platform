"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal, Pencil, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition py-2"
        >
          <span>Quiz Title</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const { id, title } = row.original;
      return (
        <Link
          href={`/dashboard/quiz-sets/${id}`}
          className="font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition line-clamp-1 max-w-md block"
        >
          {title}
        </Link>
      );
    },
  },
  {
    accessorKey: "totalQuiz",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition py-2"
        >
          <span>Total Questions</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const totalQuiz = row.getValue("totalQuiz") || 0;
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
          <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
          <span>{totalQuiz} Questions</span>
        </span>
      );
    },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition py-2"
        >
          <span>Status</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const isPublished = row.getValue("isPublished") || false;

      return isPublished ? (
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
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-8 h-8 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition cursor-pointer">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 bg-white dark:bg-slate-900 rounded-2xl p-1.5 shadow-xl border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-slate-100">
            <Link href={`/dashboard/quiz-sets/${id}`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 focus:bg-amber-50 dark:focus:bg-slate-800 focus:text-amber-700 dark:focus:text-amber-400">
                <Pencil className="w-3.5 h-3.5 mr-2" />
                Edit Quiz Set
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
