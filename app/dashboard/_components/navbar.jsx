"use client";

import { Logo } from "@/components/logo";
import { MobileSidebar } from "./mobile-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { User, LogOut, Sparkles, ExternalLink } from "lucide-react";

export const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await fetch(`/api/me`);
        const data = await response.json();
        setLoggedInUser(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchMe();
  }, []);

  const fullName = loggedInUser 
    ? `${loggedInUser.firstName || ""} ${loggedInUser.lastName || ""}`.trim()
    : "Instructor";

  return (
    <div className="px-6 h-full flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-500">
          <span className="bg-[#4A3AFF]/10 text-[#4A3AFF] px-2.5 py-1 rounded-full flex items-center gap-1 font-bold">
            <Sparkles className="w-3 h-3 text-[#4A3AFF]" />
            <span>Instructor Portal</span>
          </span>
          <span className="text-slate-300">•</span>
          <span>EduConnect Management</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="hidden md:flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#4A3AFF] transition px-3 py-1.5 rounded-xl hover:bg-indigo-50/70"
        >
          <span>Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer p-1 rounded-2xl hover:bg-slate-50 transition select-none">
              <Avatar className="w-9 h-9 ring-2 ring-indigo-50 shadow-xs">
                <AvatarImage src={loggedInUser?.profilePicture} alt={fullName} />
                <AvatarFallback className="bg-[#4A3AFF] text-white text-xs font-bold">
                  {fullName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-left pr-2">
                <h5 className="text-xs font-bold text-slate-900 leading-tight">
                  {fullName}
                </h5>
                <p className="text-[10px] text-slate-400 font-medium">
                  {loggedInUser?.designation || "Instructor"}
                </p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl p-1.5 shadow-xl border border-slate-100 bg-white">
            <div className="px-3 py-2">
              <p className="text-xs font-bold text-slate-900">{fullName}</p>
              <p className="text-[11px] text-slate-400 truncate">{loggedInUser?.email}</p>
            </div>
            <DropdownMenuSeparator className="my-1 bg-slate-100" />
            <DropdownMenuItem className="cursor-pointer rounded-xl text-xs font-semibold py-2 px-3 focus:bg-indigo-50 focus:text-[#4A3AFF]" asChild>
              <Link href="/account" className="flex items-center gap-2 w-full">
                <User className="w-3.5 h-3.5" />
                <span>My Student Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer rounded-xl text-xs font-semibold py-2 px-3 text-rose-600 focus:bg-rose-50 focus:text-rose-700"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <div className="flex items-center gap-2 w-full">
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
