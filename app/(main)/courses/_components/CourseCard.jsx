"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Star, ArrowRight, Video } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

const CourseCard = ({ course }) => {
  const fallbackThumbnails = [
    "/assets/home/course_female_hoodie.jpg",
    "/assets/home/course_finance_student.jpg",
    "/assets/home/course_seo_stairs.jpg",
    "/assets/home/course_team_discussion.jpg",
    "/assets/home/course_interior_design.jpg",
  ];
  
  const thumbnail = course?.thumbnail 
    ? getImageUrl(course.thumbnail, "courses")
    : fallbackThumbnails[0];

  const instructorName = course?.instructor 
    ? `${course.instructor.firstName || ""} ${course.instructor.lastName || ""}`.trim()
    : "Dev. Masum Billah";

  const instructorAvatar = course?.instructor?.profilePicture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";
  const categoryTitle = course?.category?.title || "Development";
  
  const rawPrice = course?.price !== undefined && course?.price !== null ? course.price : 99;
  const isFree = Number(rawPrice) === 0;
  const formattedPrice = isFree ? "Free" : `$${typeof rawPrice === "number" ? rawPrice.toFixed(2) : rawPrice}`;
  
  const totalLessons = course?.modules?.reduce((acc, m) => acc + (m.lessonIds?.length || 0), 0) || (course?.modules?.length ? course.modules.length * 6 : 24);

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100/90 dark:border-slate-800 flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Top Image & Overlay */}
      <div>
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
          <Image
            src={thumbnail}
            alt={course?.title || "Course thumbnail"}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top-to-Bottom Sliding Dark Hover Overlay */}
          <div className="absolute inset-0 bg-black/45 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 pointer-events-none" />

          {/* Top Badges (Category & Price) */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
            <span className="bg-[#4A3AFF] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              {categoryTitle}
            </span>
            <span className={`text-xs font-black px-3 py-1 rounded-full shadow-md ${
              isFree 
                ? "bg-emerald-500 text-white" 
                : "bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            }`}>
              {formattedPrice}
            </span>
          </div>

          {/* Star Rating Badge (Bottom Left) */}
          <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-bold text-amber-300 flex items-center gap-1 z-20 pointer-events-none">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>4.8</span>
            <span className="text-slate-400 font-normal">({course?.testimonials?.length || 12})</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/courses/${course.id || course._id}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#4A3AFF] transition-colors line-clamp-2 leading-snug mb-3 cursor-pointer">
            {course?.title}
          </h3>
        </Link>

        {/* Meta Stats Row (Lessons & Students) */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#4A3AFF]" />
            <span>{totalLessons} Lessons</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#4A3AFF]" />
            <span>120+ Students</span>
          </span>
        </div>
      </div>

      {/* Bottom Row: Instructor & Action Button */}
      <div className="pt-4 flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden relative ring-2 ring-indigo-50 dark:ring-indigo-950 flex-shrink-0 bg-slate-200 dark:bg-slate-700">
            <Image
              src={instructorAvatar}
              alt={instructorName}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-[120px]">
            {instructorName}
          </span>
        </div>

        <Link
          href={`/courses/${course.id || course._id}`}
          className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-slate-800 group-hover:bg-[#4A3AFF] dark:group-hover:bg-[#4A3AFF] text-[#4A3AFF] group-hover:text-white dark:text-indigo-300 dark:group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs flex-shrink-0"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default CourseCard;
