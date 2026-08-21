"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal, Pencil, Calendar, Clock, Video } from "lucide-react";
import Link from "next/link";

export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#14C88C] transition py-2"
        >
          <span>Session Title</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const { id, title } = row.original;
      return (
        <Link
          href={`/dashboard/lives/${id}`}
          className="font-bold text-slate-900 hover:text-[#14C88C] transition line-clamp-1 max-w-md block"
        >
          {title}
        </Link>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#14C88C] transition py-2"
        >
          <span>Date</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date");
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100/80 px-3 py-1 rounded-lg">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{date}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#14C88C] transition py-2"
        >
          <span>Time</span>
          <ArrowUpDown className="w-3.5 h-3.5" />
        </button>
      );
    },
    cell: ({ row }) => {
      const time = row.getValue("time");
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5 text-emerald-500" />
          <span>{time}</span>
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
            <button className="w-8 h-8 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 bg-white rounded-2xl p-1.5 shadow-xl border border-slate-100">
            <Link href={`/dashboard/lives/${id}`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 focus:bg-emerald-50 focus:text-emerald-700">
                <Pencil className="w-3.5 h-3.5 mr-2" />
                Edit Details
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/lives/${id}/broadcast`}>
              <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-bold py-2 px-3 text-emerald-600 focus:bg-emerald-50">
                <Video className="w-3.5 h-3.5 mr-2" />
                Start Stream
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
