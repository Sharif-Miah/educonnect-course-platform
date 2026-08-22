"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { updateUserInfo } from "@/app/actions/account";
import { toast } from "sonner";
import { User, Mail, Briefcase, FileText, Save, CheckCircle2 } from "lucide-react";

const PersonalDetails = ({ userInfo }) => {
  const [infoState, setInfoState] = useState({
    firstName: userInfo?.firstName || "",
    lastName: userInfo?.lastName || "",
    email: userInfo?.email || "",
    designation: userInfo?.designation || "",
    bio: userInfo?.bio || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setInfoState({
      ...infoState,
      [field]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await updateUserInfo(userInfo?.email, infoState);
      toast.success("Profile details updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 dark:border-slate-800 space-y-6 transition-colors">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-[#4A3AFF] dark:text-indigo-400 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Personal Information
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
              Update your public bio, name, and professional occupation.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* First Name */}
          <div className="space-y-2">
            <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              First Name <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="text"
              name="firstName"
              placeholder="e.g. John"
              value={infoState.firstName}
              onChange={handleChange}
              required
              className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-3 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF]"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Last Name <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="text"
              name="lastName"
              placeholder="e.g. Doe"
              value={infoState.lastName}
              onChange={handleChange}
              required
              className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-3 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF]"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Email Address <span className="text-slate-400 font-normal">(Read-only)</span>
            </Label>
            <Input
              type="email"
              name="email"
              value={infoState.email}
              disabled
              className="bg-slate-100/70 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-2xl py-3 px-4 text-xs sm:text-sm cursor-not-allowed"
            />
          </div>

          {/* Occupation / Designation */}
          <div className="space-y-2">
            <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Occupation / Role
            </Label>
            <Input
              type="text"
              name="designation"
              placeholder="e.g. Frontend Developer"
              value={infoState.designation}
              onChange={handleChange}
              className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-3 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF]"
            />
          </div>

        </div>

        {/* Bio Textarea */}
        <div className="space-y-2">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">
            About Yourself / Bio
          </Label>
          <Textarea
            name="bio"
            rows={4}
            value={infoState.bio}
            placeholder="Share a short bio about your passions, learning goals, or background..."
            onChange={handleChange}
            className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl p-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? "Saving Changes..." : "Save Profile Changes"}</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default PersonalDetails;