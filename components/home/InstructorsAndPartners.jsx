"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, Facebook, Youtube, ChevronLeft, ChevronRight } from "lucide-react";

export default function InstructorsAndPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const instructors = [
    {
      id: 1,
      name: "MD. Monaym Billah",
      role: "Web Developer",
      courses: 18,
      students: 125,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "MD. Monaym Billah",
      role: "Web Developer",
      courses: 60,
      students: 125,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "MD. Monaym Billah",
      role: "Web Developer",
      courses: 25,
      students: 125,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "MD. Monaym Billah",
      role: "English Lecturer",
      courses: 54,
      students: 125,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Sarah Jenkins",
      role: "UI/UX Designer",
      courses: 42,
      students: 180,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Alex Rivera",
      role: "Data Scientist",
      courses: 36,
      students: 210,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Elena Rossi",
      role: "Digital Marketer",
      courses: 28,
      students: 140,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "David Kim",
      role: "Full Stack Engineer",
      courses: 50,
      students: 310,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Michael Chen",
      role: "Cloud Architect",
      courses: 32,
      students: 195,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Sophia Martinez",
      role: "AI & ML Specialist",
      courses: 45,
      students: 260,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
  ];

  // Number of cards to slide
  const maxIndex = instructors.length - 4;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section id="instructors" className="py-24 bg-white relative overflow-hidden">
      {/* SVG ClipPath Definition for the exact notched shape */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="instructor-card-notch" clipPathUnits="objectBoundingBox">
            <path d="M 0.08,0 
                     L 0.74,0 
                     Q 0.79,0 0.79,0.06 
                     L 0.79,0.44 
                     Q 0.79,0.50 0.85,0.50 
                     L 0.94,0.50 
                     Q 1.0,0.50 1.0,0.56 
                     L 1.0,0.92 
                     Q 1.0,1.0 0.92,1.0 
                     L 0.08,1.0 
                     Q 0,1.0 0,0.92 
                     L 0,0.08 
                     Q 0,0 0.08,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* 1. OUR EXPERT INSTRUCTORS HEADER */}
        {/* ======================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
            INSTRUCTORS
          </p>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Expert Instructors
            </h2>
            {/* Hand-drawn blue wavy underline */}
            <div className="flex justify-center mt-3">
              <svg className="w-32 sm:w-44 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INSTRUCTORS AUTO-SLIDING CAROUSEL (10 CARDS) */}
        {/* ======================================================== */}
        <div 
          className="relative overflow-hidden mb-20 pb-8 pt-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6 sm:gap-8"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4 + 0.75)}%)`,
            }}
          >
            {instructors.map((inst) => (
              <div
                key={inst.id}
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex-shrink-0 relative group select-none"
              >
                {/* Outer Relative Frame */}
                <div className="relative w-full">
                  
                  {/* Photo area with exact SVG Cutout Notch */}
                  <div 
                    className="relative w-full aspect-[4/4.5] bg-[#E2E5EB] overflow-hidden"
                    style={{
                      clipPath: "url(#instructor-card-notch)",
                    }}
                  >
                    {/* The Instructor Image */}
                    <Image
                      src={inst.avatar}
                      alt={inst.name}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Left-to-Right Purple Sliding Hover Shadow Overlay */}
                    <div className="absolute inset-0 bg-[#8578FB]/75 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 pointer-events-none" />
                  </div>

                  {/* 3 Large Circular Social Buttons sitting in the top-right notch */}
                  <div className="absolute top-2.5 right-0.5 flex flex-col gap-2.5 z-20">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 hover:bg-[#4A3AFF] hover:text-white shadow-md border border-slate-100 flex items-center justify-center transition-all duration-200"
                    >
                      <Facebook className="w-4 h-4 fill-current" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="X Twitter"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 hover:bg-[#4A3AFF] hover:text-white shadow-md border border-slate-100 flex items-center justify-center transition-all duration-200"
                    >
                      <span className="text-sm font-black">✕</span>
                    </Link>
                    <Link
                      href="#"
                      aria-label="YouTube"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 hover:bg-[#4A3AFF] hover:text-white shadow-md border border-slate-100 flex items-center justify-center transition-all duration-200"
                    >
                      <Youtube className="w-4 h-4 fill-current" />
                    </Link>
                  </div>

                  {/* Elevated White Card overlapping the bottom of photo */}
                  <div className="relative -mt-12 mx-3 bg-white rounded-2xl p-4 sm:p-4.5 shadow-xl border border-slate-100 text-center z-20 transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#4A3AFF] transition-colors leading-snug">
                      {inst.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {inst.role}
                    </p>

                    {/* Faint Dashed Divider matching image */}
                    <div className="border-t border-dashed border-indigo-100 my-2.5" />

                    {/* Meta Row: Courses & Students */}
                    <div className="flex items-center justify-between text-xs font-semibold px-1">
                      <div className="flex items-center gap-1.5 text-[#4A3AFF]">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span className="text-slate-600 text-[11px] sm:text-xs font-bold">{inst.courses} Courses</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#4A3AFF]">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span className="text-slate-600 text-[11px] sm:text-xs font-bold">{inst.students} Students</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. BRAND PARTNERS MARQUEE / PILL BOX */}
        {/* ======================================================== */}
        <div className="relative max-w-5xl mx-auto rounded-full border border-slate-200/90 py-5 sm:py-6 px-6 sm:px-12 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between gap-6 overflow-hidden">
          
          {/* Left arrow */}
          <button 
            onClick={handlePrev} 
            aria-label="Previous Brand"
            className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 flex items-center justify-center transition flex-shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Brands Logos */}
          <div className="flex-1 flex flex-wrap items-center justify-around gap-6 sm:gap-10">
            
            {/* Coursera */}
            <div className="flex items-center gap-1 font-extrabold text-xl sm:text-2xl text-[#0056D2] tracking-tight">
              <span>coursera</span>
            </div>

            {/* Udemy */}
            <div className="flex items-center gap-1 font-bold text-xl sm:text-2xl text-[#A435F0]">
              <span className="text-[#A435F0] text-2xl font-black">u</span>
              <span className="text-slate-900 font-extrabold">udemy</span>
            </div>

            {/* British Council */}
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#002B49]" />
              </div>
              <div className="flex flex-col text-[11px] font-black leading-tight tracking-wider text-[#002B49]">
                <span>BRITISH</span>
                <span>COUNCIL</span>
              </div>
            </div>

            {/* HubSpot */}
            <div className="flex items-center gap-1.5 font-bold text-xl sm:text-2xl text-slate-800">
              <span className="font-extrabold">HubSp</span>
              <div className="w-4 h-4 rounded-full border-4 border-[#FF7A59] -ml-0.5 -mr-0.5" />
              <span className="font-extrabold">t</span>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-1 text-slate-900 font-extrabold text-lg sm:text-xl">
              <span className="text-[#00B67A] text-xl">★</span>
              <span>Trustpilot</span>
            </div>

          </div>

          {/* Right arrow */}
          <button 
            onClick={handleNext} 
            aria-label="Next Brand"
            className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 flex items-center justify-center transition flex-shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
