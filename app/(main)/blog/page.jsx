"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Calendar, Search, ArrowRight, Sparkles, ChevronRight, Flame } from "lucide-react";
import { cn, getImageUrl } from "@/lib/utils";
import { toast } from "sonner";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";
import CtaBanners from "@/components/home/CtaBanners";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const categoriesList = BLOG_CATEGORIES.filter((c) => c !== "All");
  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to EduPlus Tech Blog!");
    setNewsletterEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER: Articles, Guides & Insights */}
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
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#4A3AFF] font-bold">Blog & Insights</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>EduPlus Engineering Insights & Guides</span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                Articles & Learning Guides
              </h1>
              {/* Signature Hand-drawn Wavy Underline */}
              <div className="mt-2.5">
                <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
              Master software engineering, UI/UX design, full-stack architecture, and tech career roadmaps written by industry practitioners.
            </p>
          </div>

          {/* Search Box */}
          <div className="pt-2 max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tutorials, Next.js, Python, Career..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-xs sm:text-sm pl-11 pr-4 py-3.5 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/50 focus:border-[#4A3AFF] transition-all"
            />
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. CATEGORY PILL FILTERS */}
      {/* ======================================================== */}
      <section className="border-b border-slate-200/80 bg-white sticky top-16 z-20 shadow-xs">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer",
                selectedCategory === "All"
                  ? "bg-[#4A3AFF] text-white shadow-md shadow-indigo-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
              )}
            >
              All Topics ({BLOG_POSTS.length})
            </button>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer",
                  selectedCategory === cat
                    ? "bg-[#4A3AFF] text-white shadow-md shadow-indigo-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. FEATURED POST HERO CARD (when not searching) */}
      {/* ======================================================== */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 pt-12">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Featured Masterclass Article
            </span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="relative aspect-video lg:aspect-auto lg:h-[400px] lg:col-span-6 overflow-hidden bg-slate-100">
                <Image
                  src={getImageUrl(featuredPost.image, "courses")}
                  alt={featuredPost.title || "Featured Post"}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Sliding Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 pointer-events-none" />

                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#4A3AFF] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4A3AFF]" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#14C88C]" />
                      <span>{featuredPost.publishedDate}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-[#4A3AFF] transition-colors leading-tight mb-3">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium line-clamp-3">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-indigo-50">
                      <Image
                        src={featuredPost.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"}
                        alt={featuredPost.author?.name || "Author"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author?.name}</p>
                      <p className="text-[11px] text-slate-400 font-medium">{featuredPost.author?.role}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#4A3AFF] group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}


      {/* ======================================================== */}
      {/* 4. ARTICLES GRID */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between pb-6 border-b border-slate-200/80 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {selectedCategory === "All" ? "Latest Articles & Guides" : `${selectedCategory} Articles`}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Showing {filteredPosts.length} published articles
            </p>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative bg-white rounded-3xl p-4 sm:p-5 border border-slate-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <Image
                      src={getImageUrl(post.image, "courses")}
                      alt={post.title || "Post thumbnail"}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Sliding Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-black/30 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 pointer-events-none" />

                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-[#4A3AFF] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4A3AFF]" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#14C88C]" />
                      <span>{post.publishedDate}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#4A3AFF] transition-colors leading-snug line-clamp-2 mb-2">
                    {post.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                {/* Author & Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-50">
                      <Image
                        src={post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"}
                        alt={post.author?.name || "Author"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{post.author?.name}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-indigo-50 group-hover:bg-[#4A3AFF] group-hover:text-white text-[#4A3AFF] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto my-8 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">No articles found</h4>
            <p className="text-xs text-slate-500">
              Try searching with another keyword or pick another category above.
            </p>
          </div>
        )}
      </section>


      {/* ======================================================== */}
      {/* 5. NEWSLETTER SECTION */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute -top-24 left-1/4 w-72 h-72 bg-[#4A3AFF]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-[#14C88C]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300 inline-block">
              Weekly Engineering Digest
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get weekly tutorials delivered directly to your inbox
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              No spam. Just concise tech guides, architecture case studies, and coding tips.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all whitespace-nowrap cursor-pointer"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* ======================================================== */}
      {/* 6. SIGNATURE CTA BANNERS */}
      {/* ======================================================== */}
      <CtaBanners />

    </div>
  );
}
