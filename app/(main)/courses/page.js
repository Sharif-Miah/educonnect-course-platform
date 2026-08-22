import { getCourseList } from "@/queries/courses";
import { getCategories } from "@/queries/categories";
import CourseCard from "./_components/CourseCard";
import FilterCourse from "./_components/FilterCourse";
import FilterCourseMobile from "./_components/FilterCourseMobile";
import SearchCourse from "./_components/SearchCourse";
import SortCourse from "./_components/SortCourse";
import ActiveFilters from "./_components/ActiveFilters";
import CtaBanners from "@/components/home/CtaBanners";
import { Sparkles, BookOpen, SearchX, ChevronRight, Users, Award, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0b1120] transition-colors duration-200">
      
      {/* ======================================================== */}
      {/* HERO BANNER: Explore Our World-Class Courses */}
      {/* ======================================================== */}
      <div className="bg-slate-950 text-white relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-slate-800/80">
        
        {/* Background Radial Glow & Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#4A3AFF]/35 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#14C88C]/20 rounded-full blur-3xl" />
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#4A3AFF] font-bold">Courses</span>
            {category && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-slate-300 capitalize">{category.replace(/-/g, " ")}</span>
              </>
            )}
          </div>

          {/* Title & Badge */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>Discover Knowledge & Master Skills</span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                Explore All Courses
              </h1>
              {/* Signature Hand-drawn Wavy Underline */}
              <div className="mt-2.5">
                <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
              Gain in-demand skills with hands-on projects taught by industry veterans. Learn at your own pace with lifetime access and verified certificates.
            </p>
          </div>

          {/* Highlight Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-4xl">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A3AFF]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block">{allCourses.length}+</span>
                  <span className="text-[11px] text-slate-400">Total Courses</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#14C88C]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block">10,000+</span>
                  <span className="text-[11px] text-slate-400">Active Students</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A3AFF]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block">100%</span>
                  <span className="text-[11px] text-slate-400">Verified Certificate</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#14C88C]" />
                <div>
                  <span className="text-base sm:text-lg font-bold text-white block">Lifetime</span>
                  <span className="text-[11px] text-slate-400">Full Access</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ======================================================== */}
      {/* FILTER CONTROLS BAR: Search, Sort & Mobile Sheet */}
      {/* ======================================================== */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs py-4 transition-colors">
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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="lg:col-span-3">
            <FilterCourse categories={allCategories} />
          </div>

          {/* Course Grid & Results (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Results Count Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 pb-2">
              <span>
                Showing <strong className="text-slate-900 dark:text-white">{filteredCourses.length}</strong> of <strong className="text-slate-900 dark:text-white">{allCourses.length}</strong> Courses
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
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 max-w-md mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[#4A3AFF] dark:text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
                  <SearchX className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No courses found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  We couldn&apos;t find any courses matching your filter criteria. Try searching for different keywords or resetting the filters.
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

      {/* ======================================================== */}
      {/* SIGNATURE CTA BANNERS (Matching Landing Page Experience) */}
      {/* ======================================================== */}
      <CtaBanners />

    </div>
  );
};

export default CoursesPage;
