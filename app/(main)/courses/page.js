import { getCourseList } from "@/queries/courses";
import { getCategories } from "@/queries/categories";
import CourseCard from "./_components/CourseCard";
import FilterCourse from "./_components/FilterCourse";
import FilterCourseMobile from "./_components/FilterCourseMobile";
import SearchCourse from "./_components/SearchCourse";
import SortCourse from "./_components/SortCourse";
import ActiveFilters from "./_components/ActiveFilters";
import { Sparkles, BookOpen, SearchX } from "lucide-react";
import Link from "next/link";

const CoursesPage = async ({ searchParams }) => {
  const { category, price, search, sort } = searchParams || {};

  const allCourses = await getCourseList();
  const allCategories = await getCategories();

  // 1. Filter by Search keyword
  let filteredCourses = allCourses;
  if (search && search.trim()) {
    const s = search.toLowerCase().trim();
    filteredCourses = filteredCourses.filter(
      (c) =>
        c.title?.toLowerCase().includes(s) ||
        c.subtitle?.toLowerCase().includes(s) ||
        c.category?.title?.toLowerCase().includes(s) ||
        (c.instructor && `${c.instructor.firstName} ${c.instructor.lastName}`.toLowerCase().includes(s))
    );
  }

  // 2. Filter by Category
  if (category) {
    const selectedCats = category.split(",").map((x) => x.toLowerCase().trim()).filter(Boolean);
    if (selectedCats.length > 0) {
      filteredCourses = filteredCourses.filter((c) => {
        const catTitle = c.category?.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "";
        const rawTitle = c.category?.title?.toLowerCase() || "";
        return selectedCats.some((sc) => catTitle.includes(sc) || rawTitle.includes(sc) || sc.includes(catTitle));
      });
    }
  }

  // 3. Filter by Price
  if (price) {
    const selectedPrices = price.split(",").map((p) => p.toLowerCase().trim()).filter(Boolean);
    if (selectedPrices.includes("free") && !selectedPrices.includes("paid")) {
      filteredCourses = filteredCourses.filter((c) => Number(c.price) === 0);
    } else if (selectedPrices.includes("paid") && !selectedPrices.includes("free")) {
      filteredCourses = filteredCourses.filter((c) => Number(c.price) > 0);
    }
  }

  // 4. Sort courses
  if (sort === "price-asc") {
    filteredCourses.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
  } else if (sort === "price-desc") {
    filteredCourses.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
  } else if (sort === "newest") {
    filteredCourses.sort((a, b) => new Date(b.createdOn || 0) - new Date(a.createdOn || 0));
  } else {
    // Default 'popular': sort by testimonials count or modules count
    filteredCourses.sort((a, b) => (b.testimonials?.length || 0) - (a.testimonials?.length || 0));
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ======================================================== */}
      {/* HERO BANNER: Explore All Courses */}
      {/* ======================================================== */}
      <div className="bg-slate-950 text-white relative py-14 sm:py-16 overflow-hidden border-b border-slate-800">
        
        {/* Glow Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#4A3AFF] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#14C88C] rounded-full blur-3xl" />
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
            <span>Discover Knowledge & Master Skills</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Explore All Courses
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            Gain in-demand skills from world-class instructors. Find the perfect hands-on curriculum to advance your career.
          </p>
        </div>
      </div>


      {/* ======================================================== */}
      {/* FILTER CONTROLS BAR: Search, Sort & Mobile Sheet */}
      {/* ======================================================== */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-4">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
            {/* Search Input */}
            <SearchCourse />

            {/* Sort & Mobile Trigger */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <SortCourse />
              <FilterCourseMobile categories={allCategories} />
            </div>
          </div>

          {/* Active Filter Chips */}
          <ActiveFilters />
        </div>
      </div>


      {/* ======================================================== */}
      {/* MAIN LAYOUT: Sidebar Filters + Course Grid */}
      {/* ======================================================== */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="lg:col-span-3">
            <FilterCourse categories={allCategories} />
          </div>

          {/* Course Grid & Results (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Results Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 pb-2">
              <span>
                Showing <strong className="text-slate-900">{filteredCourses.length}</strong> of <strong className="text-slate-900">{allCourses.length}</strong> Courses
              </span>
            </div>

            {/* Grid of Courses */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id || course._id} course={course} />
                ))}
              </div>
            ) : (
              /* Empty State when no matching courses found */
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4 max-w-md mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-indigo-50 text-[#4A3AFF] flex items-center justify-center mx-auto shadow-inner">
                  <SearchX className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  No courses found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We couldn't find any courses matching your filter criteria. Try searching for different keywords or resetting the filters.
                </p>
                <div className="pt-2">
                  <Link
                    href="/courses"
                    className="inline-block bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs font-bold px-6 py-3 rounded-full transition shadow-md"
                  >
                    Reset All Filters
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};

export default CoursesPage;
