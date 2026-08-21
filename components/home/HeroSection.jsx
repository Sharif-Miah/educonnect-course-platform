"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, BookOpen, Star, Video, FileText, Users } from "lucide-react";

export default function HeroSection({ featuredCourse }) {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-900">
      {/* Background Image: Clearly visible students with subtle text-shadow gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero_students.jpg"
          alt="Students learning on campus"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Soft gradient only on the left for text readability, keeping the image fully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
      </div>

      {/* Floating Animated Geometric & Star Elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Left organic blue droplet */}
        <div className="absolute top-[38%] left-3 sm:left-10 w-9 h-14 bg-[#0070F3] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -rotate-12 opacity-95 shadow-lg shadow-blue-500/30 animate-float" />

        {/* Right organic green droplet next to heading */}
        <div className="absolute top-[28%] left-[45%] sm:left-[42%] w-10 h-14 bg-[#10B981] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] rotate-45 opacity-95 shadow-lg shadow-emerald-500/30 animate-float-slow" />

        {/* Top-right sparkle stars */}
        <div className="absolute top-12 right-20 sm:right-32 animate-pulse">
          <svg className="w-8 h-8 text-[#14C88C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 sm:right-16 animate-pulse" style={{ animationDelay: "1.2s" }}>
          <svg className="w-11 h-11 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <div className="absolute top-36 right-16 sm:right-24 animate-pulse" style={{ animationDelay: "0.6s" }}>
          <svg className="w-5 h-5 text-[#14C88C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Bottom-right yellow floating oval */}
        <div className="absolute bottom-28 right-8 sm:right-16 w-12 h-6 bg-[#F59E0B] rounded-full rotate-12 opacity-95 shadow-md shadow-amber-500/30 animate-float-reverse" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-600/40">
              <GraduationCap className="w-4 h-4" />
              <span>Keep Learning</span>
            </div>

            {/* Main Headline matching mockup */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
              Best Online <br />
              Courses <br />
              From EduPlus
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-100 max-w-lg leading-relaxed font-medium drop-shadow">
              Remember to tailor the section names to fit the specific needs and structure of your university website.
            </p>

            {/* CTA & Trustpilot Rating */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Find Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Trustpilot Badge */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white">
                <div className="flex items-center text-[#00B67A] font-bold text-sm gap-1">
                  <span>★</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">Trustpilot</span>
                </div>
                <div className="flex text-[#00B67A] text-xs">
                  {"★★★★★"}
                </div>
                <span className="text-xs text-amber-400 font-bold ml-1">★ 4.8 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Area: Center Floating 2-Card Stack + Featured Course Card */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-5 sm:gap-6">

            {/* 2 Stacked/Connected Experience Stats Cards */}
            <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-44 z-20">

              {/* White Card: 250+ Enrolled Students */}
              <div className="flex-1 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 flex flex-col items-center text-center animate-float">
                <div className="w-12 h-12 rounded-full bg-indigo-50/80 flex items-center justify-center text-[#4A3AFF] mb-1.5">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">250+</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Enrolled Students</p>
              </div>

              {/* Royal Blue Card: 3652+ Finished Session */}
              <div className="flex-1 bg-[#4A3AFF] text-white rounded-2xl p-5 shadow-2xl flex flex-col items-center text-center animate-float-reverse">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white mb-1.5">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-white tracking-tight">3652+</h4>
                <p className="text-[11px] text-indigo-100 font-medium mt-0.5">Finished Session</p>
              </div>
            </div>

            {/* Featured Course Card matching mockup */}
            <div className="w-full max-w-[340px] bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 text-slate-900 hover:shadow-indigo-500/20 transition-all duration-300 z-10">
              {/* Card Image with Programming Badge & Camera Icon */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3.5 bg-slate-100">
                <Image
                  src="/assets/home/hero_card_classroom.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />

                {/* Badge top-left: Programming */}
                <div className="absolute top-3 left-3 bg-[#4A3AFF] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Video className="w-3.5 h-3.5" />
                  <span>Programming</span>
                </div>

                {/* Video button bottom-right */}
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#4A3AFF] shadow-md">
                  <Video className="w-4 h-4" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="inline-flex items-center gap-1 bg-indigo-50 text-[#4A3AFF] px-2 py-0.5 rounded-md font-bold text-[11px]">
                  <Star className="w-3 h-3 fill-[#4A3AFF]" />
                  <span>4.6</span>
                </div>
              </div>

              {/* Course Title */}
              <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug mb-3 hover:text-[#4A3AFF] transition cursor-pointer">
                The complete guide to build restful API
              </h3>

              {/* Lessons & Students */}
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 font-medium">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#4A3AFF]" />
                  <span>250 Lessons</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#4A3AFF]" />
                  <span>125 Students</span>
                </div>
              </div>

              {/* Price & Instructor */}
              <div className="flex items-center justify-between pt-3">
                <span className="text-lg font-extrabold text-[#4A3AFF]">
                  $120.00
                </span>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden relative ring-1 ring-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    Dev. Masum Billah
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
