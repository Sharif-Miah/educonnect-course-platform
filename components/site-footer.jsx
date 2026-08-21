"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, Send } from "lucide-react";

export function SiteFooter({ className }) {
  return (
    <footer className={cn("relative bg-[#F8FAFC] pt-20 pb-8 text-slate-600 overflow-hidden", className)}>
      
      {/* Background Vector Guilloche Wave Lines matching Screenshot */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <svg
          className="w-full h-full text-slate-300"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 150 C 300 50, 600 450, 1100 200 C 1300 100, 1500 250, 1600 200"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M-100 200 C 350 100, 650 500, 1150 250 C 1350 150, 1550 300, 1600 250"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M-100 250 C 400 150, 700 550, 1200 300 C 1400 200, 1600 350, 1650 300"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M-100 300 C 450 200, 750 600, 1250 350 C 1450 250, 1650 400, 1700 350"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-100 350 C 500 250, 800 650, 1300 400 C 1500 300, 1700 450, 1750 400"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-100 400 C 550 300, 850 700, 1350 450 C 1550 350, 1750 500, 1800 450"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 5 Columns Layout matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-16">
          
          {/* Column 1: About Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">About Us</h4>
              {/* Soft Purple Wavy Underline */}
              <div className="mt-1.5">
                <svg className="w-10 text-[#818CF8]" viewBox="0 0 40 8" fill="none">
                  <path d="M1 5C4 1 7 7 10 3C13 1 16 7 19 3C22 1 25 7 28 3C31 1 34 7 37 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-[260px]">
              Duis aute irure dolor in reprehenderit in volupta velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat
            </p>
            <div className="space-y-1.5 text-xs font-semibold pt-1">
              <p>
                <span className="text-slate-800 font-bold">Email: </span>
                <a href="mailto:support@example.com" className="text-[#4A3AFF] hover:underline font-semibold">support@example.com</a>
              </p>
              <p>
                <span className="text-slate-800 font-bold">Phone: </span>
                <a href="tel:+9801736895478" className="text-[#4A3AFF] hover:underline font-semibold">+9801736895478</a>
              </p>
              <p>
                <span className="text-slate-800 font-bold">Location: </span>
                <span className="text-[#4A3AFF] font-semibold">3500 Lenox Road , USA</span>
              </p>
            </div>
          </div>

          {/* Column 2: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Company</h4>
              <div className="mt-1.5">
                <svg className="w-10 text-[#818CF8]" viewBox="0 0 40 8" fill="none">
                  <path d="M1 5C4 1 7 7 10 3C13 1 16 7 19 3C22 1 25 7 28 3C31 1 34 7 37 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><Link href="/#about" className="hover:text-[#4A3AFF] transition-colors">About</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Course</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructor</Link></li>
              <li><Link href="/events" className="hover:text-[#4A3AFF] transition-colors">Events</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructor Details</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Purchase Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Useful Links</h4>
              <div className="mt-1.5">
                <svg className="w-10 text-[#818CF8]" viewBox="0 0 40 8" fill="none">
                  <path d="M1 5C4 1 7 7 10 3C13 1 16 7 19 3C22 1 25 7 28 3C31 1 34 7 37 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><Link href="/contact" className="hover:text-[#4A3AFF] transition-colors">Contact Us</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Technology</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructors</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="hover:text-[#4A3AFF] transition-colors">Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4A3AFF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Explore (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Explore</h4>
              <div className="mt-1.5">
                <svg className="w-10 text-[#818CF8]" viewBox="0 0 40 8" fill="none">
                  <path d="M1 5C4 1 7 7 10 3C13 1 16 7 19 3C22 1 25 7 28 3C31 1 34 7 37 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><Link href="/contact" className="hover:text-[#4A3AFF] transition-colors">Contact Us</Link></li>
              <li><Link href="/courses" className="hover:text-[#4A3AFF] transition-colors">Technology</Link></li>
              <li><Link href="/#instructors" className="hover:text-[#4A3AFF] transition-colors">Instructors</Link></li>
              <li><Link href="/pricing" className="hover:text-[#4A3AFF] transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="hover:text-[#4A3AFF] transition-colors">Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#4A3AFF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 5: Sign up for the Newsletter (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">Sign up for the Newsletter</h4>
              <div className="mt-1.5">
                <svg className="w-10 text-[#818CF8]" viewBox="0 0 40 8" fill="none">
                  <path d="M1 5C4 1 7 7 10 3C13 1 16 7 19 3C22 1 25 7 28 3C31 1 34 7 37 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-[280px]">
              Duis aute irure dolor in reprehenderit in volupta velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Newsletter Input with Integrated Send Button */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center pt-1">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-[#ECEFF8] border border-transparent focus:border-[#4A3AFF]/40 focus:bg-white rounded-full py-3.5 pl-5 pr-14 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-9 h-9 rounded-full bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white flex items-center justify-center transition shadow-md"
              >
                <Send className="w-4 h-4 -rotate-45 -mr-0.5" />
              </button>
            </form>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-slate-700">
              <span className="font-semibold text-slate-800">Follow on:</span>
              <div className="flex items-center gap-3.5 text-slate-800">
                <Link href="#" aria-label="Facebook" className="hover:text-[#4A3AFF] transition-colors"><Facebook className="w-4 h-4 fill-current" /></Link>
                <Link href="#" aria-label="Twitter X" className="hover:text-[#4A3AFF] transition-colors font-black text-xs">✕</Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-[#4A3AFF] transition-colors"><Linkedin className="w-4 h-4 fill-current" /></Link>
                <Link href="#" aria-label="YouTube" className="hover:text-[#4A3AFF] transition-colors"><Youtube className="w-4 h-4 fill-current" /></Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Logo & Copyright */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-xs text-slate-500 font-normal">
            Copyright 2026 All Rights Reserved Edplus
          </p>
        </div>

      </div>
    </footer>
  );
}
