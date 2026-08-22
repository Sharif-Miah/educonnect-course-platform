import Link from "next/link";
import { BookOpen, ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100/90">
        
        {/* Glow Icon */}
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 text-[#4A3AFF] flex items-center justify-center mx-auto shadow-inner border border-indigo-100/60">
          <BookOpen className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#4A3AFF]/10 text-[#4A3AFF] px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Page or Course Not Found</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Course Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            The course or page you are looking for does not exist or may have been removed. Explore our available courses to continue learning!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All Courses</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
