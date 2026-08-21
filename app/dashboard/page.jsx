import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/formatPrice";
import { getCourseDetailsByInstructor } from "@/queries/courses";
import { getUserByEmail } from "@/queries/users";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  Star, 
  PlusCircle, 
  Radio, 
  HelpCircle, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const instructor = await getUserByEmail(session.user.email);

  if (instructor?.role?.toLowerCase() !== "instructor" && instructor?.role?.toLowerCase() !== "teacher") {
    redirect("/login");
  }

  const courseStats = await getCourseDetailsByInstructor(instructor?.id);
  const fullName = `${instructor?.firstName || ""} ${instructor?.lastName || ""}`.trim() || "Instructor";

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-[#F8FAFC] min-h-[calc(100vh-80px)]">
      
      {/* ======================================================== */}
      {/* 1. WELCOME BANNER WITH GRADIENT & GREETING */}
      {/* ======================================================== */}
      <div className="relative bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
        
        {/* Glow blob decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A3AFF]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#14C88C]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3 py-1 rounded-full text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instructor Command Center</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Welcome back, {fullName}! 👋
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Here is what is happening with your courses and student enrollments today. Keep up the great teaching!
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/dashboard/courses/add"
              className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Course</span>
            </Link>
            
            <Link
              href="/dashboard/courses"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl border border-white/10 transition-all"
            >
              <span>Manage Courses</span>
            </Link>
          </div>
        </div>
      </div>


      {/* ======================================================== */}
      {/* 2. ANALYTICS STATS GRID */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Total Courses */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-slate-100/90 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Courses
            </span>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-[#4A3AFF] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {courseStats?.courses || 0}
            </div>
            <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>Published & active</span>
            </p>
          </div>
        </div>

        {/* Card 2: Total Enrollments */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-slate-100/90 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Students
            </span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#14C88C] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {courseStats?.enrollments || 0}
            </div>
            <p className="text-[11px] font-semibold text-slate-400 mt-1">
              Active learners across all courses
            </p>
          </div>
        </div>

        {/* Card 3: Total Revenue */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-slate-100/90 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {formatPrice(courseStats?.revenue || 0)}
            </div>
            <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>Lifetime gross revenue</span>
            </p>
          </div>
        </div>

        {/* Card 4: Average Rating */}
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-slate-100/90 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Average Rating
            </span>
            <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center">
              <Star className="w-5 h-5 fill-pink-500" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {courseStats?.ratings || "4.9"} <span className="text-sm font-bold text-slate-400">/ 5.0</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 mt-1">
              Based on {courseStats?.reviews || 0} student reviews
            </p>
          </div>
        </div>

      </div>


      {/* ======================================================== */}
      {/* 3. QUICK SHORTCUTS & EDUCATIONAL MANAGEMENT CARDS */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Shortcut 1: Manage Courses */}
        <Link
          href="/dashboard/courses"
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg border border-slate-100/90 transition-all space-y-3 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4A3AFF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#4A3AFF] transition-colors">
              Manage All Courses
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Publish new modules, edit pricing, update video lessons, and manage curriculum.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A3AFF] pt-2">
            <span>View Courses</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Shortcut 2: Live Classrooms */}
        <Link
          href="/dashboard/lives"
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg border border-slate-100/90 transition-all space-y-3 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#14C88C] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-[#14C88C] transition-colors">
              Live Class Sessions
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Schedule interactive live webinars, Q&A sessions, and broadcast direct streams.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#14C88C] pt-2">
            <span>Manage Live Streams</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Shortcut 3: Quizzes & Assessment */}
        <Link
          href="/dashboard/quiz-sets"
          className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg border border-slate-100/90 transition-all space-y-3 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              Quiz Sets & Tests
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Design multiple-choice assessments, quizzes, and evaluate student submissions.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 pt-2">
            <span>Create & Manage Quizzes</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

      </div>

    </div>
  );
};

export default DashboardPage;
