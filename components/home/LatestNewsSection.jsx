"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, Calendar, FileText } from "lucide-react";

export default function LatestNewsSection() {
  const blogs = [
    {
      id: "blog-1",
      category: "Software",
      author: "Masum Billah",
      date: "January 9, 2025",
      title: "Leverage agile frameworks to provide robust digital solutions",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "blog-2",
      category: "Software",
      author: "Masum Billah",
      date: "January 9, 2025",
      title: "Leverage agile frameworks to provide modern education technology",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "blog-3",
      category: "Software",
      author: "Masum Billah",
      date: "January 9, 2025",
      title: "Leverage agile frameworks to provide collaborative team excellence",
      thumbnail: "/assets/home/course_seo_stairs.jpg",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50/50 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4A3AFF] mb-2">
            LATEST NEWS
          </p>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Read Some Store About <br />
              News & Blog
            </h2>
            {/* Hand-drawn blue wavy underline */}
            <div className="flex justify-center mt-3">
              <svg className="w-32 sm:w-44 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Blog Cards Grid (Image 1 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Top-Left Badge */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge top-left */}
                  <div className="absolute top-3 left-3 bg-[#4A3AFF] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{blog.category}</span>
                  </div>
                </div>

                {/* Meta Row: Author & Date */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#4A3AFF]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4A3AFF]" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Blog Heading */}
                <Link href={`/blog/${blog.id}`}>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-[#4A3AFF] transition-colors mb-4">
                    {blog.title}
                  </h3>
                </Link>
              </div>

              {/* Bottom Arrow Button */}
              <div className="pt-2">
                <Link
                  href={`/blog/${blog.id}`}
                  className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-[#4A3AFF] border border-slate-100 group-hover:border-transparent flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
