import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import { getCourseDetails } from "@/queries/courses";
import { notFound } from "next/navigation";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/50">
      {/* 1. Hero Banner with Title, Badges, Breadcrumbs, Instructor Pill */}
      <CourseDetailsIntro course={course} />

      {/* 2. Main 2-Column Content: Media Preview, Interactive Tabs, & Sticky Enrollment Card */}
      <CourseDetails course={course} />
    </div>
  );
};

export default SingleCoursePage;
