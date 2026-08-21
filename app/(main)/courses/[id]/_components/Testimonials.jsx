import { Star, Quote, User } from "lucide-react";
import Image from "next/image";

const Testimonials = ({ testimonials = [] }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-10 bg-slate-50 rounded-2xl text-slate-500 text-sm font-semibold">
        No student reviews submitted yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((testimonial, idx) => {
          const user = testimonial?.user;
          const userName = user 
            ? `${user.firstName || user.first_name || ""} ${user.lastName || user.last_name || ""}`.trim() 
            : `Student ${idx + 1}`;
          const avatarUrl = user?.profilePicture || `https://i.pravatar.cc/150?u=${idx}`;
          const rating = testimonial?.rating || 5;

          return (
            <div
              key={testimonial.id || idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md border border-slate-100/90 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Header with User Info & Stars */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-indigo-50 flex-shrink-0 bg-slate-100">
                      <Image
                        src={avatarUrl}
                        alt={userName}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {userName}
                      </h4>
                      <p className="text-[11px] font-semibold text-emerald-600">
                        Verified Student
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {testimonial?.content || "Excellent course! The explanations are clear, practical, and helped me build confidence."}
                </p>
              </div>

              {/* Bottom Quote Mark */}
              <div className="flex justify-end pt-2">
                <Quote className="w-5 h-5 text-indigo-100 fill-indigo-50 rotate-180" />
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Testimonials;
