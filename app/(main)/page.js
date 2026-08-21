import { getCategories } from "@/queries/categories";
import { getCourseList } from "@/queries/courses";

import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import AboutExperienceSection from "@/components/home/AboutExperienceSection";
import LiveClassesAndPopularCourses from "@/components/home/LiveClassesAndPopularCourses";
import HowItWorksAndTestimonials from "@/components/home/HowItWorksAndTestimonials";
import ScrollToTop from "@/components/home/ScrollToTop";

const HomePage = async () => {
    const courses = await getCourseList();
    const categories = await getCategories();

    return (
        <div className="w-full flex flex-col">
            {/* 1. Hero Section (Image 1) */}
            <HeroSection featuredCourse={courses?.[0]} />

            {/* 2. Top Categories Section (Image 2) */}
            <CategorySection categories={categories} />

            {/* 3. About Our EdPlus & Media Experience + Stats Bar (Image 3) */}
            <AboutExperienceSection />

            {/* 4. Live Classes & Most Popular Courses (Image 4) */}
            <LiveClassesAndPopularCourses courses={courses} />

            {/* 5. Working Process / How It Works & Testimonials (Image 5) */}
            <HowItWorksAndTestimonials />

            {/* Scroll To Top Button */}
            <ScrollToTop />
        </div>
    );
};

export default HomePage;
