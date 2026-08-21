import { EduLoader } from "@/components/loader";

export default function CourseDetailsLoading() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-28 bg-[#F8FAFC]">
      <EduLoader size="lg" text="Loading Course Details..." />
    </div>
  );
}
