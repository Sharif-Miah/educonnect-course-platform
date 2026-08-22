import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { Radio, PlusCircle, Sparkles } from "lucide-react";
import Link from "next/link";

const lives = [
  {
    id: 1,
    title: "Career In Full-Stack Web Development & Modern Architecture",
    date: "25 Aug 2026",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Interactive Live Q&A: Next.js 14 App Router Deep Dive",
    date: "28 Aug 2026",
    time: "08:30 PM",
  },
];

const LivesPage = async () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-[#F8FAFC] dark:bg-[#0b1120] min-h-[calc(100vh-80px)] transition-colors">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 border border-transparent dark:border-emerald-900/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Broadcast Center</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Live Class Sessions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
            Schedule, manage, and host live interactive video sessions for your students.
          </p>
        </div>

        <Link
          href="/dashboard/lives/add"
          className="inline-flex items-center gap-2 bg-[#14C88C] hover:bg-[#0fa874] text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Schedule Live Class</span>
        </Link>
      </div>

      {/* Table Container Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 dark:border-slate-800 transition-colors">
        <DataTable columns={columns} data={lives} />
      </div>

    </div>
  );
};

export default LivesPage;
