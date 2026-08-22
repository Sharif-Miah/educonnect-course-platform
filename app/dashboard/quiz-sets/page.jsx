import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { getAllQuizSets } from "@/queries/quizzes";
import { HelpCircle, PlusCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const QuizSets = async () => {
  let quizSets = [];
  try {
    quizSets = await getAllQuizSets();
  } catch (e) {
    console.error("Error fetching quiz sets:", e);
  }

  const mappedQuizSets = (quizSets || []).map((q) => {
    return {
      id: q.id || q._id,
      title: q.title,
      isPublished: q.active,
      totalQuiz: q.quizIds?.length || 0,
    };
  });

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-[#F8FAFC] dark:bg-[#0b1120] min-h-[calc(100vh-80px)] transition-colors">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-500/10 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 border border-transparent dark:border-amber-900/60">
              <Sparkles className="w-3 h-3" />
              <span>Assessment & Quizzes</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interactive Quiz Sets
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
            Design multiple-choice assessments, assign them to courses, and test student mastery.
          </p>
        </div>

        <Link
          href="/dashboard/quiz-sets/add"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 w-fit cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create Quiz Set</span>
        </Link>
      </div>

      {/* Table Container Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 dark:border-slate-800 transition-colors">
        <DataTable columns={columns} data={mappedQuizSets} />
      </div>

    </div>
  );
};

export default QuizSets;
