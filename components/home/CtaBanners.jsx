"use client";

import Link from "next/link";
import Image from "next/image";

export default function CtaBanners() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Get Free Courses (Image 2 Style) */}
          <div className="relative bg-[#4A3AFF] rounded-[32px] p-8 sm:p-10 text-white overflow-hidden shadow-2xl flex flex-col justify-between min-h-[300px]">
            {/* Background Grid Pattern & Doodles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full border border-white/20 grid grid-cols-6 grid-rows-4" />
            </div>

            {/* Decorative 4-point star & Cross */}
            <div className="absolute top-6 right-[42%] text-white text-xl animate-pulse">✦</div>
            <div className="absolute bottom-8 left-[38%] text-white/60 text-lg">✖</div>

            <div className="relative z-10 max-w-xs sm:max-w-sm space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Get Free Courses
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-medium">
                Top instructors from around the world teach millions of student on EduPlus
              </p>
              <div className="pt-3">
                <Link
                  href="/register"
                  className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right Cutout Image */}
            <div className="absolute right-0 bottom-0 w-48 sm:w-60 h-64 sm:h-72 pointer-events-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                alt="Female Instructor"
                fill
                unoptimized
                className="object-cover object-top rounded-tl-[60px]"
              />
            </div>
          </div>

          {/* Card 2: Become a Tutor (Image 2 Style) */}
          <div className="relative bg-[#4A3AFF] rounded-[32px] p-8 sm:p-10 text-white overflow-hidden shadow-2xl flex flex-col justify-between min-h-[300px]">
            {/* Background Grid Pattern & Doodles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full border border-white/20 grid grid-cols-6 grid-rows-4" />
            </div>

            {/* Decorative Cross */}
            <div className="absolute bottom-8 left-[38%] text-white/60 text-lg">✖</div>

            <div className="relative z-10 max-w-xs sm:max-w-sm space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Become a Tutor
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-medium">
                Top instructors from around the world teach millions of student on EduPlus
              </p>
              <div className="pt-3">
                <Link
                  href="/register"
                  className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Right Cutout Image */}
            <div className="absolute right-0 bottom-0 w-48 sm:w-60 h-64 sm:h-72 pointer-events-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
                alt="Male Tutor"
                fill
                unoptimized
                className="object-cover object-top rounded-tl-[60px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
