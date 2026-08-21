"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, GraduationCap, Users, UserCheck, Award, Heart } from "lucide-react";
import CountUp from "./CountUp";

export default function AboutExperienceSection() {
  const features = [
    { title: "Best Instructors & Courses", col: 1 },
    { title: "Online Courses", col: 2 },
    { title: "Trusted by Students", col: 1 },
    { title: "Live Classes", col: 2 },
    { title: "100% ISO Certified", col: 1 },
    { title: "24 Hours Support", col: 2 },
  ];

  const stats = [
    { icon: Users, end: 118, suffix: "k", label: "Our Happy Students" },
    { icon: GraduationCap, end: 150, suffix: "k", label: "Enrolled Learner" },
    { icon: UserCheck, end: 120, suffix: "+", label: "Expert Instructor" },
    { icon: Award, end: 96, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Image Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Top-left decorative wavy lines */}
            <div className="absolute top-2 left-6 text-indigo-400 opacity-80">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                <path d="M5 5C15 15 5 25 15 35C25 45 15 55 25 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M18 5C28 15 18 25 28 35C38 45 28 55 38 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Top "love" colorful doodle */}
            <div className="absolute -top-4 right-1/4 text-rose-500 font-serif italic text-lg sm:text-2xl font-bold tracking-wider opacity-90 rotate-6 flex items-center gap-1">
              <span>love</span>
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>

            {/* Bottom-left dot grid */}
            <div className="absolute bottom-6 left-8 opacity-40">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#4A3AFF] rounded-full" />
                ))}
              </div>
            </div>

            {/* Bottom-right watermark graduation cap */}
            <div className="absolute -bottom-6 right-2 text-slate-100 -z-0 pointer-events-none">
              <GraduationCap className="w-40 h-40 stroke-[1]" />
            </div>

            {/* Pill Shaped Photo 1 (Studying at table) */}
            <div className="relative w-52 sm:w-64 h-80 sm:h-96 rounded-[70px] overflow-hidden shadow-2xl border-4 border-white z-10 -translate-x-8 sm:-translate-x-12">
              <Image
                src="/assets/home/about_student_study.jpg"
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>

            {/* Circular Photo 2 (Student with glasses & books) */}
            <div className="relative w-48 sm:w-60 h-48 sm:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white z-20 -translate-x-6 sm:-translate-x-10 translate-y-8 bg-[#14C88C]">
              <Image
                src="/assets/home/about_student_portrait.jpg"
                alt="University Student"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Experience Advisor Card */}
            <div className="absolute bottom-16 left-6 sm:left-12 z-30 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex flex-col items-center gap-2 text-center animate-float">
              <div className="w-11 h-11 rounded-full bg-indigo-50 text-[#4A3AFF] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">
                Experience<br />Advisor
              </span>
            </div>

          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
                ABOUT OUR EDPLUS
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We create unique digital media <br />
                experiences.
              </h2>
              {/* Hand-drawn blue wavy underline */}
              <div className="mt-2">
                <svg className="w-32 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At University Edplus, we are driven by the transformative power of education and the limitless potential within each individual. Founded in 1971, we have remained steadfast in our commitment to nurturing intellectual curiosity, promoting academic excellence, cultivating a dynamic campus community.
            </p>

            {/* Feature Checkmarks (2 Columns with Dotted Connectors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-[#4A3AFF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>View All Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Rounded Counter Stats Banner */}
        <div className="mt-20 bg-[#4A3AFF] rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ${
                    index > 0 ? "pt-6 md:pt-0 md:pl-6" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-3 text-white">
                    <StatIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2200} />
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-100 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
