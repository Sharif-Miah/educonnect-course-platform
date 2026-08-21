import { EduLoader } from "@/components/loader";

export default function CoursesLoading() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-28 bg-[#F8FAFC]">
      <EduLoader size="lg" text="Loading Courses..." />
    </div>
  );
}
