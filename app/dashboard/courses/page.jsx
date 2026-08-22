import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { getInstructorDashboardData, COURSE_DATA } from "@/lib/dashboard-helper";
import Link from "next/link";
import { PlusCircle, BookOpen, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

const CoursesPage = async () => {
  const courses = await getInstructorDashboardData(COURSE_DATA);

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-[#F8FAFC] dark:bg-[#0b1120] min-h-[calc(100vh-80px)] transition-colors">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#4A3AFF]/10 dark:bg-[#4A3AFF]/20 text-[#4A3AFF] dark:text-indigo-300 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Curriculum Center</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Course Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
            Create, edit, publish and track performance for all your educational courses.
          </p>
        </div>

        <Link
          href="/dashboard/courses/add"
          className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Course</span>
        </Link>
      </div>

      {/* Table Container Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 dark:border-slate-800 transition-colors">
        <DataTable columns={columns} data={courses || []} />
      </div>

    </div>
  );
};

export default CoursesPage;
