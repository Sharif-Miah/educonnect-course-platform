import Link from "next/link";
import Image from "next/image";
import { Star, Users, Calendar, Globe, Award, ChevronRight, CheckCircle, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { formatMyDate } from "@/lib/date";

const CourseDetailsIntro = async ({ course }) => {
  const lastModifiedDate = formatMyDate(course?.modifiedOn);
  const instructor = course?.instructor;
  const fullName = instructor ? `${instructor.firstName || ""} ${instructor.lastName || ""}`.trim() : "Dev. Masum Billah";
  const instructorAvatar = instructor?.profilePicture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  return (
    <div className="bg-slate-950 text-white relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800/80">
      
      {/* Background Ambient Glow & Subtle Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#4A3AFF]/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-[#14C88C]/15 rounded-full blur-3xl" />
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/courses" className="hover:text-white transition">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#4A3AFF] font-bold">{course?.category?.title || "Development"}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300 truncate max-w-[240px] font-medium">{course?.title}</span>
        </div>

        {/* Main Content Area */}
        <div className="max-w-4xl space-y-6">
          
          {/* Category & Badge Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-[#4A3AFF] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/25 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{course?.category?.title || "Technology"}</span>
            </span>
            
            <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bestseller & Verified Curriculum</span>
            </span>
          </div>

          {/* Course Title with Hand-drawn Wavy Underline */}
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {course?.title}
            </h1>
            {/* Hand-drawn blue wavy underline */}
            <div className="mt-3">
              <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Subtitle / Short Description */}
          {course?.subtitle && (
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl pt-1">
              {course.subtitle}
            </p>
          )}

          {/* Stats Badges Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* 4.8 Rating */}
            <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-xl text-amber-300 font-bold text-xs sm:text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8</span>
              <span className="text-slate-400 font-normal">({course?.testimonials?.length || 140}+ Reviews)</span>
            </div>

            {/* Students Enrolled */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs sm:text-sm text-slate-200 font-medium">
              <Users className="w-4 h-4 text-[#4A3AFF]" />
              <span>1,450+ Students Enrolled</span>
            </div>

            {/* Skill Level */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs sm:text-sm text-slate-200 font-medium">
              <Layers className="w-4 h-4 text-[#4A3AFF]" />
              <span>All Levels (Beginner to Advanced)</span>
            </div>

            {/* Certificate */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs sm:text-sm text-slate-200 font-medium">
              <Award className="w-4 h-4 text-[#14C88C]" />
              <span>Verified Certificate</span>
            </div>
          </div>

          {/* Instructor Profile Pill */}
          <div className="pt-3 flex items-center gap-3.5 bg-slate-900/70 border border-slate-800/80 p-2.5 pr-5 rounded-2xl w-fit">
            <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-[#4A3AFF] bg-slate-800 flex-shrink-0">
              <Image
                src={instructorAvatar}
                alt={fullName}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-400 font-medium">Instructor:</span>
                <span className="text-xs font-bold text-white flex items-center gap-1">
                  {fullName}
                  <CheckCircle className="w-3.5 h-3.5 text-[#14C88C] fill-[#14C88C]/20" />
                </span>
              </div>
              <p className="text-[11px] text-[#4A3AFF] font-semibold">
                {instructor?.designation || "Senior Software Engineer & Educator"}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetailsIntro;