import { CourseProgress } from "@/components/course-progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, CheckCircle2, Play, ArrowRight, FileCheck } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { getCategoryDetails } from "@/queries/categories";
import { getAReport } from "@/queries/reports";
import { getCourseDetails } from "@/queries/courses";

const EnrolledCourseCard = async ({ enrollment }) => {
  let courseCategory = null;
  if (enrollment?.course?.category?._id) {
    try {
      courseCategory = await getCategoryDetails(enrollment.course.category._id);
    } catch (e) {}
  }

  const filter = {
    course: enrollment?.course?._id,
    student: enrollment?.student?._id,
  };

  let report = null;
  try {
    report = await getAReport(filter);
  } catch (e) {}

  let courseDetails = null;
  try {
    courseDetails = await getCourseDetails(enrollment?.course?._id);
  } catch (e) {}

  const totalModuleCount = courseDetails?.modules?.length || enrollment?.course?.modules?.length || 1;
  const totalCompletedModules = report?.totalCompletedModeules ? report.totalCompletedModeules.length : 0;
  const totalProgress = Math.min(100, Math.round((totalCompletedModules / totalModuleCount) * 100));

  const quizzes = report?.quizAssessment?.assessments || [];
  const totalQuizzes = quizzes.length;
  const quizzesTaken = quizzes.filter((q) => q.attempted);

  const totalCorrect = quizzesTaken.map((quiz) => {
    return (quiz.options || []).filter((o) => o.isCorrect === true && o.isSelected === true);
  }).flat();

  const marksFromQuizzes = totalCorrect.length * 5;
  const otherMarks = report?.quizAssessment?.otherMarks ?? 0;
  const totalMarks = marksFromQuizzes + otherMarks;

  const thumbnail = enrollment?.course?.thumbnail 
    ? getImageUrl(enrollment.course.thumbnail, "courses")
    : "/assets/home/course_female_hoodie.jpg";

  const isCompleted = totalProgress === 100;

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100/90 dark:border-slate-800 flex flex-col justify-between h-full relative overflow-hidden">
      
      <div>
        {/* Course Thumbnail with Sliding Overlay */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
          <Image
            src={thumbnail}
            alt={enrollment?.course?.title || "Enrolled course thumbnail"}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Sliding Dark Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
            <span className="bg-[#4A3AFF] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              {courseCategory?.title || enrollment?.course?.category?.title || "Course"}
            </span>

            {isCompleted ? (
              <span className="bg-emerald-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Completed</span>
              </span>
            ) : (
              <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                In Progress
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#4A3AFF] transition-colors line-clamp-2 leading-snug mb-3">
          {enrollment?.course?.title}
        </h3>

        {/* Modules & Quizzes Grid */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3.5 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>Modules</span>
            </span>
            <span className="text-slate-900 dark:text-white font-bold">
              {totalCompletedModules} / {totalModuleCount} Completed
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <FileCheck className="w-3.5 h-3.5 text-[#14C88C]" />
              <span>Quizzes Taken</span>
            </span>
            <span className="text-slate-900 dark:text-white font-bold">
              {quizzesTaken.length} / {totalQuizzes || 0}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 dark:border-slate-700">
            <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Marks Earned</span>
            </span>
            <span className="text-[#4A3AFF] font-extrabold text-xs sm:text-sm">
              {totalMarks} pts
            </span>
          </div>
        </div>

      </div>

      {/* Progress Bar & Continue Button */}
      <div className="space-y-3 pt-1 mt-auto">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-500 dark:text-slate-400">Course Progress</span>
            <span className="text-[#4A3AFF]">{totalProgress}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isCompleted ? "bg-[#14C88C]" : "bg-[#4A3AFF]"
              }`}
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#4A3AFF] group-hover:underline">
          <span>Continue Lesson</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

    </div>
  );
};

export default EnrolledCourseCard;
