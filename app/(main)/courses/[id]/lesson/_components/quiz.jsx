"use client";

import { useState } from "react";
import QuizModal from "./quiz-modal";
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Quiz({ courseId, quizSet, isTaken }) {
  const [open, setOpen] = useState(false);

  const quizzes = (quizSet?.quizIds || []).map((quiz) => {
    return {
      id: quiz._id ? quiz._id.toString() : quiz.id,
      title: quiz.title,
      description: quiz.description,
      options: (quiz.options || []).map((option) => ({
        label: option.text,
        isTrue: option.is_correct,
      })),
    };
  });

  const totalMarks = quizzes.length * 5;

  return (
    <>
      <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-100/90 dark:border-slate-800 shadow-sm overflow-hidden space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                {quizSet?.title || "Assessment Quiz"}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-400 font-medium">
                {quizzes.length} Questions • {totalMarks} Marks
              </p>
            </div>
          </div>

          {isTaken && (
            <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-100 dark:border-emerald-900/60">
              <CheckCircle2 className="w-3 h-3" />
              <span>Completed</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer",
            isTaken
              ? "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
              : "bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white shadow-md shadow-indigo-500/20"
          )}
        >
          <span>{isTaken ? "Retake / Review Quiz" : "Start Course Quiz"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <QuizModal
        courseId={courseId}
        quizSetId={quizSet._id ? quizSet._id.toString() : quizSet.id}
        quizzes={quizzes}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
