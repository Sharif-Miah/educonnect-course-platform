"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, Send } from "lucide-react";

export function SiteFooter({ className }) {
  return (
    <footer className={cn("border-t border-slate-200/80 bg-slate-50/60 pt-20 pb-8 text-slate-600", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 5 Columns Layout (Image 2 Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-slate-200/80">
          
          {/* Column 1: About Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">About Us</h4>
              {/* Blue Wavy Underline */}
              <div className="mt-1">
                <svg className="w-12 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Duis aute irure dolor in reprehenderit in volupta velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat
            </p>
            <div className="space-y-1.5 text-xs font-semibold">
              <p className="text-[#4A3AFF]">
                <span className="text-slate-700">Email: </span>
                <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
              </p>
              <p className="text-[#4A3AFF]">
                <span className="text-slate-700">Phone: </span>
                <a href="tel:+9801736895478" className="hover:underline">+9801736895478</a>
              </p>
              <p className="text-[#4A3AFF]">
                <span className="text-slate-700">Location: </span>
                <span>3500 Lenox Road , USA</span>
              </p>
            </div>
          </div>

          {/* Column 2: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Company</h4>
              <div className="mt-1">
                <svg className="w-12 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link href="/#about" className="hover:text-[#4A3AFF] transition-colors">About</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Course</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructor</Link></li>
              <li><Link href="/events" className="hover:text-[#4A3AFF] transition-colors">Events</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructor Details</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Purchase Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Useful Links</h4>
              <div className="mt-1">
                <svg className="w-12 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link href="/contact" className="hover:text-[#4A3AFF] transition-colors">Contact Us</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Technology</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructors</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="hover:text-[#4A3AFF] transition-colors">Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4A3AFF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Explore (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Explore</h4>
              <div className="mt-1">
                <svg className="w-12 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link href="/contact" className="hover:text-[#4A3AFF] transition-colors">Contact Us</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Technology</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructors</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="hover:text-[#4A3AFF] transition-colors">Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4A3AFF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 5: Sign up for the Newsletter (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Sign up for the Newsletter</h4>
              <div className="mt-1">
                <svg className="w-12 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Duis aute irure dolor in reprehenderit in volupta velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Newsletter Input with Send Arrow */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-indigo-50/50 border border-indigo-100/80 rounded-full py-3 pl-4 pr-12 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-8 h-8 rounded-full bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white flex items-center justify-center transition shadow-md"
              >
                <Send className="w-3.5 h-3.5 -rotate-45 -mr-0.5" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-slate-700">
              <span>Follow on:</span>
              <div className="flex items-center gap-3 text-slate-700">
                <Link href="#" className="hover:text-[#4A3AFF] transition-colors"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-[#4A3AFF] transition-colors font-black text-xs">✕</Link>
                <Link href="#" className="hover:text-[#4A3AFF] transition-colors"><Linkedin className="w-4 h-4" /></Link>
                <Link href="#" className="hover:text-[#4A3AFF] transition-colors"><Youtube className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Logo & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Copyright 2026 All Rights Reserved Edplus
          </p>
        </div>

      </div>
    </footer>
  );
}
