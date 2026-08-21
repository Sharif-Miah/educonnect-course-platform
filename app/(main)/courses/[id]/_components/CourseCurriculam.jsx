import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Clock, PlayCircle, HelpCircle, FileCode, CheckCircle } from "lucide-react";
import CourseModuleList from "./module/CourseModuleList";

const CourseCurriculam = ({ course }) => {
  const modules = course?.modules || [];
  
  const totalLessons = modules.reduce((acc, m) => acc + (m.lessonIds?.length || 0), 0) || (modules.length * 6);
  const totalDurationSeconds = modules.reduce((acc, m) => {
    return acc + (m.lessonIds?.reduce((subAcc, l) => subAcc + (l.duration || 0), 0) || 0);
  }, 0);

  const totalHours = (totalDurationSeconds > 0 ? totalDurationSeconds / 3600 : modules.length * 2.5).toFixed(1);

  return (
    <div className="space-y-6">
      
      {/* Curriculum Summary Pill Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 text-xs sm:text-sm font-semibold text-slate-700">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#4A3AFF]" />
          <span>{modules.length} Modules</span>
        </div>
        <div className="flex items-center gap-2">
          <PlayCircle className="w-4 h-4 text-[#4A3AFF]" />
          <span>{totalLessons} Lessons</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#4A3AFF]" />
          <span>{totalHours} Total Hours</span>
        </div>
      </div>

      {/* Accordion Modules List */}
      {modules.length > 0 ? (
        <Accordion
          defaultValue={["item-0", "item-1"]}
          type="multiple"
          collapsible
          className="w-full space-y-4"
        >
          {modules.map((module, idx) => (
            <AccordionItem 
              key={module.id || idx} 
              value={`item-${idx}`}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden px-4"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-bold text-sm sm:text-base text-slate-900">
                <div className="flex items-center gap-3 text-left">
                  <span className="w-7 h-7 rounded-lg bg-indigo-50 text-[#4A3AFF] text-xs font-black flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{module.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1">
                <CourseModuleList module={module} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl text-slate-500 text-sm font-semibold">
          Curriculum is currently being updated.
        </div>
      )}

    </div>
  );
};

export default CourseCurriculam;
