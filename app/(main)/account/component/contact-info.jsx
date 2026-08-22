"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Globe, MapPin, Building } from "lucide-react";
import { toast } from "sonner";

const ContactInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Contact details saved successfully!");
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
        <Phone className="w-5 h-5 text-[#14C88C]" />
        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
          Contact & Web Details
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">Phone Number</Label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              name="number"
              type="tel"
              placeholder="+880 1700 000000"
              className="pl-10 bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#14C88C]/30"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">Personal Website / Portfolio</Label>
          <div className="relative">
            <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              name="url"
              type="url"
              placeholder="https://yourportfolio.com"
              className="pl-10 bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#14C88C]/30"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-700 dark:text-slate-200">Location / City</Label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              name="location"
              type="text"
              placeholder="Dhaka, Bangladesh"
              className="pl-10 bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white dark:placeholder-slate-500 rounded-2xl py-2.5 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#14C88C]/30"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-2xl shadow-md transition-all active:scale-95 border border-transparent dark:border-slate-700 cursor-pointer"
          >
            Save Contact Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;