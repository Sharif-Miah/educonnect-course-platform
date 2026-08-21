import { Presentation, UsersRound, MessageSquare, Star } from "lucide-react";
import Image from "next/image";

const CourseInstructor = ({ course }) => {
  const instructor = course?.instructor;
  const fullName = `${instructor?.firstName || ""} ${instructor?.lastName || ""}`.trim() || "Dev. Masum Billah";
  const avatarUrl = instructor?.profilePicture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop";

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-3xl p-6 sm:p-8 border border-slate-100/90 space-y-6">
      
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        
        {/* Instructor Photo */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white flex-shrink-0 bg-slate-200">
          <Image
            src={avatarUrl}
            alt={fullName}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Instructor Info & Stats */}
        <div className="flex-1 space-y-3">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {fullName}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#4A3AFF] mt-0.5">
              {instructor?.designation || "Lead Instructor & Professional Developer"}
            </p>
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
              <Presentation className="w-4 h-4 text-[#4A3AFF] mx-auto mb-1" />
              <span className="text-xs font-bold text-slate-900 block">12+</span>
              <span className="text-[10px] text-slate-500 font-medium">Courses</span>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
              <UsersRound className="w-4 h-4 text-[#4A3AFF] mx-auto mb-1" />
              <span className="text-xs font-bold text-slate-900 block">1,450+</span>
              <span className="text-[10px] text-slate-500 font-medium">Students</span>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
              <MessageSquare className="w-4 h-4 text-[#4A3AFF] mx-auto mb-1" />
              <span className="text-xs font-bold text-slate-900 block">340+</span>
              <span className="text-[10px] text-slate-500 font-medium">Reviews</span>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 mx-auto mb-1" />
              <span className="text-xs font-bold text-slate-900 block">4.9</span>
              <span className="text-[10px] text-slate-500 font-medium">Rating</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bio Description */}
      <div className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal space-y-2 border-t border-slate-200/60">
        <p>
          {instructor?.bio || "Experienced industry veteran with a strong track record of teaching thousands of students globally. Passionate about breaking down complex programming concepts into practical, project-based steps."}
        </p>
      </div>

    </div>
  );
};

export default CourseInstructor;
