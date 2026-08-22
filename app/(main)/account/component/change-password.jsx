"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { changePassword } from "@/app/actions/account";
import { KeyRound, Lock, ShieldCheck } from "lucide-react";

const ChangePassword = ({ email }) => {
  const [passwordState, setPasswordState] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    setPasswordState({ ...passwordState, [key]: value });
  }

  async function doPassowrdChange(event) {
    event.preventDefault();

    if (passwordState.newPassword !== passwordState.confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    setLoading(true);

    try {
      await changePassword(email, passwordState?.oldPassword, passwordState?.newPassword);
      toast.success("Password changed successfully!");
      setPasswordState({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
        <KeyRound className="w-5 h-5 text-[#4A3AFF] dark:text-indigo-400" />
        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
          Security & Password
        </h4>
      </div>

      <form onSubmit={doPassowrdChange} className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
            Current Password <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="password"
            name="oldPassword"
            placeholder="Enter current password"
            value={passwordState.oldPassword}
            onChange={handleChange}
            required
            className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
            New Password <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={passwordState.newPassword}
            onChange={handleChange}
            required
            className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
            Confirm New Password <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Re-type new password"
            value={passwordState.confirmPassword}
            onChange={handleChange}
            required
            className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-2xl shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;