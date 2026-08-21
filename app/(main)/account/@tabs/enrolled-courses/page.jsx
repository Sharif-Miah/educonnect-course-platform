import { getEnrollmentsForUser } from "@/queries/enrollments";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/queries/users";
import EnrolledCourseCard from "../../component/enrolled-coursecard";
import Link from "next/link";
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";

async function EnrolledCourses() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const enrollments = await getEnrollmentsForUser(loggedInUser?.id);

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            My Enrolled Courses
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Track your course progress, lessons completed, and assessments.
          </p>
        </div>

        <span className="bg-[#4A3AFF]/10 text-[#4A3AFF] text-xs font-extrabold px-3.5 py-1.5 rounded-full">
          {enrollments?.length || 0} Enrolled
        </span>
      </div>

      {/* Grid */}
      {enrollments && enrollments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {enrollments.map((enrollment) => (
            <Link
              key={enrollment?.id || enrollment?._id}
              href={`/courses/${enrollment.course?._id ? enrollment.course._id.toString() : enrollment.course?.id}/lesson`}
            >
              <EnrolledCourseCard enrollment={enrollment} />
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4 max-w-md mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-indigo-50 text-[#4A3AFF] flex items-center justify-center mx-auto shadow-inner">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No enrolled courses yet
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            You haven't enrolled in any courses yet. Discover our catalog of in-demand courses and start learning today!
          </p>
          <div className="pt-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs font-bold px-6 py-3 rounded-full transition shadow-md"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}

export default EnrolledCourses;
