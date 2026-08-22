
import AlertBanner from "@/components/alert-banner";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { QuizSetAction } from "./_components/quiz-set-action";
import { TitleForm } from "./_components/title-form";
import { AddQuizForm } from "./_components/add-quiz-form";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import { Trash } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Circle } from "lucide-react";
import { QuizCardActions } from "./_components/quiz-card-actions";
import { getQuizSetById } from "@/queries/quizzes";

const initialQuizes = [
  {
    id: 1,
    title: "What is HTML ?",
    options: [
      {
        label: "A programming language",
        isTrue: false,
      },
      {
        label: "A markup language",
        isTrue: true,
      },
      {
        label: "A famous book",
        isTrue: false,
      },
      {
        label: "A famous tv show",
        isTrue: false,
      },
    ],
  },
  {
    id: 2,
    title: "What is Javascript ?",
    options: [
      {
        label: "A programming language",
        isTrue: true,
      },
      {
        label: "A markup language",
        isTrue: false,
      },
      {
        label: "A famous book",
        isTrue: false,
      },
      {
        label: "A famous tv show",
        isTrue: false,
      },
    ],
  },
];
const EditQuizSet = async ({params: {quizSetId}}) => {
  const quizSet = await getQuizSetById(quizSetId);
  const quizzes = quizSet.quizIds.map(quiz => {
    return {
      id: quiz._id.toString(),
      title: quiz.title,
      options: quiz.options.map(option => {
        return {
          label: option.text,
          isTrue: option.is_correct
        }
      })
    }
  })
  console.log(quizSet);

  return (
    <>
      <AlertBanner
        label="This course is unpublished. It will not be visible in the course."
        variant="warning"
      />
      <div className="p-6">
        <div className="flex items-center justify-end">
          <QuizSetAction />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {/* Quiz List */}
          <div className="max-lg:order-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Quiz List</h2>
            {quizzes.length === 0 && (<AlertBanner
              label="No Quiz are in the set, add some using the form."
              variant="warning"
              className="rounded-2xl mb-6"
            />)}
            <div className="space-y-6">
              {quizzes.map((quiz) => {
                return (
                  <div
                    key={quiz.id}
                    className="bg-white dark:bg-slate-900 shadow-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <h2 className="mb-4 font-bold text-base text-slate-900 dark:text-white">{quiz.title}</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {quiz.options.map((option) => {
                        return (
                          <div
                            className={cn(
                              "py-2 px-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 border transition-colors",
                              option.isTrue
                                ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-semibold"
                                : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                            )}
                            key={option.label}
                          >
                            {option.isTrue ? (
                              <CircleCheck className="size-4 text-emerald-500 shrink-0" />
                            ) : (
                              <Circle className="size-4 text-slate-400 shrink-0" />
                            )}

                            <p>{option.label}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <QuizCardActions quiz={quiz} quizSetId={quizSetId}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
          <div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-xl">Customize your quiz set</h2>
            </div>
            <div className="max-w-[800px]">
              <TitleForm
                initialData={{
                  title: quizSet.title,
                }}
                quizSetId={quizSet.id}
              />
            </div>

            <div className="max-w-[800px]">
              <AddQuizForm quizSetId={quizSetId}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditQuizSet;
