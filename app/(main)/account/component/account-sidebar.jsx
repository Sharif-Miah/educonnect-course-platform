import Image from "next/image";
import Menu from "./account-menu";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/queries/users";
import { CheckCircle2, ShieldCheck, Mail, Camera } from "lucide-react";

const AccountSidebar = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const fullName = `${loggedInUser?.firstName || ""} ${loggedInUser?.lastName || ""}`.trim() || "Dev. Masum Billah";
  const avatarUrl = loggedInUser?.profilePicture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100/90 dark:border-slate-800 sticky top-24 space-y-6 transition-colors">
      
      {/* User Header Profile */}
      <div className="flex flex-col items-center text-center">
        
        {/* Avatar with Camera Icon and Ring */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-indigo-50 dark:ring-indigo-950 shadow-md bg-slate-100 dark:bg-slate-800 group">
          <Image
            src={avatarUrl}
            alt={fullName}
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Name & Badges */}
        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
            <span>{fullName}</span>
            <CheckCircle2 className="w-4 h-4 text-[#14C88C] fill-[#14C88C]/15" />
          </h3>
          
          <p className="text-xs text-slate-400 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
            <Mail className="w-3 h-3 text-slate-400" />
            <span>{loggedInUser?.email}</span>
          </p>

          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="bg-indigo-50 dark:bg-indigo-950/60 text-[#4A3AFF] dark:text-indigo-300 text-[11px] font-bold px-3 py-1 rounded-full border border-indigo-100/60 dark:border-indigo-900/60">
              Verified Student
            </span>
            <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/60">
              Active
            </span>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 dark:border-slate-800" />

      {/* Navigation Menu */}
      <Menu />

      {/* Quick Security Tip */}
      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[#14C88C] flex-shrink-0 mt-0.5" />
        <span>Your account is protected with encrypted credentials and NextAuth.</span>
      </div>

    </div>
  );
};

export default AccountSidebar;