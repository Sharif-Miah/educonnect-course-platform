import { CheckCircle2, AlertCircle, Users2, Sparkles } from "lucide-react";

const CourseOverview = ({ course }) => {
  const defaultLearnings = [
    "Master the core fundamental concepts and advanced techniques",
    "Build real-world production projects from scratch step by step",
    "Apply industry best practices, architecture patterns, and clean code",
    "Prepare for interviews and advance your professional career"
  ];

  const learnings = (course?.learning && course.learning.length > 0) 
    ? course.learning 
    : defaultLearnings;

  return (
    <div className="space-y-8 text-slate-700">
      
      {/* 1. Description */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
          Course Description
        </h3>
        <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 font-normal">
          <p>{course?.description || "This course covers everything you need to know from the fundamentals to advanced level concepts with practical exercises and production projects."}</p>
        </div>
      </div>

      {/* 2. What You Will Learn Card */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-slate-50 to-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-indigo-100/80 space-y-5">
        <div className="flex items-center gap-2 text-slate-900">
          <Sparkles className="w-5 h-5 text-[#4A3AFF]" />
          <h4 className="text-lg sm:text-xl font-bold tracking-tight">
            What You Will Learn
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {learnings.map((learning, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white/90 rounded-2xl p-4 shadow-sm border border-slate-100/90">
              <CheckCircle2 className="w-5 h-5 text-[#14C88C] flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                {learning}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Requirements */}
      <div className="space-y-4">
        <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#4A3AFF]" />
          <span>Course Prerequisites & Requirements</span>
        </h4>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600 font-medium pl-1">
          <li>Basic understanding of computer operations and internet browsing</li>
          <li>A computer (Windows, macOS, or Linux) with an active internet connection</li>
          <li>No prior advanced programming experience required — everything is taught from scratch</li>
        </ul>
      </div>

      {/* 4. Target Audience */}
      <div className="space-y-4">
        <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Users2 className="w-5 h-5 text-[#4A3AFF]" />
          <span>Who is this course for?</span>
        </h4>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600 font-medium pl-1">
          <li>Beginners eager to break into the tech industry with practical skills</li>
          <li>Intermediate developers looking to level up their portfolio and career</li>
          <li>Anyone wanting to build modern, real-world digital applications</li>
        </ul>
      </div>

    </div>
  );
};

export default CourseOverview;
