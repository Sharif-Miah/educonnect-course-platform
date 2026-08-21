import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Target, 
  Compass, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Globe2,
  HeartHandshake
} from "lucide-react";
import CtaBanners from "@/components/home/CtaBanners";

const INSTRUCTORS = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Head of AI & Data Science",
    bio: "Ex-Google Research Lead, Ph.D. in Machine Learning from Stanford University.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    badge: "15 Courses",
  },
  {
    name: "Alexandre Rivera",
    role: "Lead Full-Stack Architect",
    bio: "Principal Engineer at Meta, author of bestselling React 19 & Next.js guides.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    badge: "22 Courses",
  },
  {
    name: "Elena Rostova",
    role: "Director of Product Design",
    bio: "Design Director with 12+ years shaping interfaces at Apple and Airbnb.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    badge: "18 Courses",
  },
  {
    name: "David Chen",
    role: "Cybersecurity & Cloud Lead",
    bio: "Certified AWS/GCP Solutions Architect and ethical hacking consultant.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    badge: "14 Courses",
  },
];

const CORE_VALUES = [
  {
    icon: Target,
    title: "Practical Mastery First",
    desc: "We focus on building real-world production projects, not boring theoretical slides.",
    color: "#4A3AFF",
    bg: "bg-[#4A3AFF]/10",
  },
  {
    icon: Compass,
    title: "Curated Career Paths",
    desc: "Step-by-step roadmap tailored to industry job requirements and skill demands.",
    color: "#14C88C",
    bg: "bg-[#14C88C]/10",
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Certificates",
    desc: "Authentic credentials with 1-click LinkedIn export and employer verification.",
    color: "#F59E0B",
    bg: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Lifetime Curriculum Updates",
    desc: "Access newly added modules, lessons, and updated best practices forever.",
    color: "#EC4899",
    bg: "bg-pink-500/10",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER: About EduPlus */}
      {/* ======================================================== */}
      <section className="bg-slate-950 text-white relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-slate-800/80">
        
        {/* Glow Decor */}
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
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#4A3AFF] font-bold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>Democratizing World-Class Tech Education</span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                About EduPlus Platform
              </h1>
              {/* Signature Hand-drawn Wavy Underline */}
              <div className="mt-2.5">
                <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
              We empower learners across the globe with in-demand skills in Software Engineering, AI, and Product Design through structured, project-driven masterclasses.
            </p>
          </div>

          {/* Stats Highlight Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">50,000+</span>
              <span className="text-xs text-slate-400 font-medium">Students Enrolled</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#4A3AFF] block">120+</span>
              <span className="text-xs text-slate-400 font-medium">Masterclass Courses</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#14C88C] block">98%</span>
              <span className="text-xs text-slate-400 font-medium">Success Rate</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block">40+</span>
              <span className="text-xs text-slate-400 font-medium">Countries Worldwide</span>
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. OUR STORY & MISSION (2-COLUMN GRID) */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Overlapping Badges (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <Image
                src="/assets/home/about_student_study.jpg"
                alt="Student studying with laptop"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Overlapping Floating Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100 max-w-[260px] sm:max-w-xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#14C88C] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-tight">10+ Years</h4>
                  <p className="text-xs text-slate-400 font-medium">Of Educational Excellence</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                Trusted by engineering leaders from top Fortune 500 tech companies.
              </p>
            </div>
          </div>

          {/* Right Column: Mission Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="bg-[#4A3AFF]/10 text-[#4A3AFF] text-xs font-extrabold px-3.5 py-1 rounded-full inline-block">
                Our Founding Story & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Crafting the Next Generation of Tech Leaders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Founded in 2018, EduPlus was born out of frustration with traditional, outdated computer science curriculum. We envisioned a modern learning environment where students learn directly from lead engineers through real-world software projects.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#4A3AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% Project-Driven Curriculum</h4>
                  <p className="text-xs text-slate-500 font-medium">Every module concludes with a portfolio-grade application ready for GitHub.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#14C88C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Direct 1-on-1 Instructor Feedback</h4>
                  <p className="text-xs text-slate-500 font-medium">Get your code reviewed by experienced mentors to elevate your architecture.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Career Mentorship & Placement Support</h4>
                  <p className="text-xs text-slate-500 font-medium">Comprehensive resume reviews, system design mock interviews, and job board access.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. CORE VALUES & PILLARS */}
      {/* ======================================================== */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="bg-[#4A3AFF]/10 text-[#4A3AFF] text-xs font-extrabold px-3.5 py-1 rounded-full inline-block">
              Our Core Educational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why 50,000+ Students Choose EduPlus
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              We adhere to the highest pedagogical standards to ensure our graduates excel in top global software engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CORE_VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${val.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" style={{ color: val.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#4A3AFF] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. LEAD INSTRUCTORS SHOWCASE */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <span className="bg-[#14C88C]/10 text-emerald-600 text-xs font-extrabold px-3.5 py-1 rounded-full inline-block mb-2">
              World-Class Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Lead Instructors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Learn directly from architects and researchers shaping the future of software.
            </p>
          </div>

          <Link
            href="/register/instructor"
            className="text-xs font-extrabold text-[#4A3AFF] hover:underline whitespace-nowrap"
          >
            Become an Instructor →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INSTRUCTORS.map((inst, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 text-center group"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto ring-4 ring-indigo-50 shadow-md">
                <Image
                  src={inst.avatar}
                  alt={inst.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#4A3AFF] transition-colors">
                  {inst.name}
                </h4>
                <p className="text-xs font-bold text-[#4A3AFF] mt-0.5">{inst.role}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2 line-clamp-2">
                  {inst.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="bg-slate-50 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-100">
                  {inst.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ======================================================== */}
      {/* 5. SIGNATURE CTA BANNERS */}
      {/* ======================================================== */}
      <CtaBanners />

    </div>
  );
}
