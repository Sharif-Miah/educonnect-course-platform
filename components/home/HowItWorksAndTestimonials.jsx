"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function HowItWorksAndTestimonials() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Smith",
      location: "Australia",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      content: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      location: "United States",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      content: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      content: "The courses provided here transformed my career trajectory. The instructors are world-class and the hands-on projects are very practical.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % (testimonials.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* TOP SECTION: WORKING PROCESS / HOW IT WORKS */}
        {/* ======================================================== */}
        <div className="mb-24">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
              WORKING PROCESS
            </p>
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                How It Work
              </h2>
              {/* Hand-drawn blue wavy underline */}
              <div className="flex justify-center mt-2">
                <svg className="w-28 sm:w-36 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Showcase Card */}
          <div className="relative max-w-4xl mx-auto">
            
            {/* Top-left dot grid decor */}
            <div className="absolute -top-6 -left-8 -z-0 opacity-40">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                ))}
              </div>
            </div>

            {/* Bottom-right green chevron decor */}
            <div className="absolute -bottom-6 -right-6 text-[#14C88C] opacity-80 flex gap-1 z-20">
              <span className="text-2xl font-bold tracking-tighter">{"»»"}</span>
            </div>

            <div className="relative aspect-[16/8] sm:aspect-[16/7] rounded-[32px] overflow-hidden shadow-2xl bg-slate-900 z-10 group">
              <Image
                src="/assets/home/how_it_works_video.jpg"
                alt="Students collaborating"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />

              {/* Large Outline "Intro Video" Typography */}
              <div className="absolute inset-0 flex items-center justify-start pl-8 sm:pl-16 pointer-events-none select-none">
                <h3
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent tracking-wider"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.45)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Intro <br />
                  Video
                </h3>
              </div>

              {/* Central/Right Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-end pr-12 sm:pr-24">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Intro Video"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#4A3AFF] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
                >
                  {/* Pulsing ring */}
                  <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60 pointer-events-none" />
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#4A3AFF] ml-1" />
                </button>
              </div>

              {/* Video Modal if clicked */}
              {isPlaying && (
                <div className="absolute inset-0 bg-slate-950 z-30 flex items-center justify-center p-4">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="EduPlus Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 text-white bg-slate-800/80 rounded-full px-3 py-1 text-xs font-bold"
                  >
                    Close ✕
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>


        {/* ======================================================== */}
        {/* BOTTOM SECTION: TESTIMONIALS */}
        {/* ======================================================== */}
        <div id="testimonials" className="pt-8">
          
          {/* Section Header with Slider Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
                TESTIMONIALS
              </p>
              <div className="relative inline-block">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  People’s Say About Our <br className="hidden sm:inline" />
                  Edplus
                </h2>
                {/* Hand-drawn blue wavy underline */}
                <div className="mt-2">
                  <svg className="w-28 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#4A3AFF] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#4A3AFF] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3 Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: 4.8 Rating Showcase (Dark image background) */}
            <div className="md:col-span-4 relative rounded-3xl overflow-hidden shadow-lg min-h-[220px] p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/assets/home/testimonial_rating_bg.jpg"
                alt="Rating showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/75" />

              <div className="relative z-10 space-y-2">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  4.8
                </h3>
                <div className="flex justify-center text-amber-400 text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  5 Star Rating
                </p>
              </div>
            </div>

            {/* Card 2: Testimonial Card */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between relative transition-all duration-300">
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-indigo-50">
                    <Image
                      src={testimonials[0].avatar}
                      alt={testimonials[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{testimonials[0].name}</h4>
                    <p className="text-xs font-medium text-indigo-600">{testimonials[0].location}</p>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {testimonials[0].content}
                </p>
              </div>

              {/* Rating Stars & Quote Icon */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <div className="flex text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
                <Quote className="w-7 h-7 text-indigo-100 fill-indigo-50 rotate-180" />
              </div>
            </div>

            {/* Card 3: Testimonial Card */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between relative transition-all duration-300">
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-indigo-50">
                    <Image
                      src={testimonials[1].avatar}
                      alt={testimonials[1].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{testimonials[1].name}</h4>
                    <p className="text-xs font-medium text-indigo-600">{testimonials[1].location}</p>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {testimonials[1].content}
                </p>
              </div>

              {/* Rating Stars & Quote Icon */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <div className="flex text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
                <Quote className="w-7 h-7 text-indigo-100 fill-indigo-50 rotate-180" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
