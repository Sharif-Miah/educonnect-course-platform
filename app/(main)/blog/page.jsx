"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Calendar, Search, ArrowRight, Sparkles, Mail, Tag } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn, getImageUrl } from "@/lib/utils";
import { toast } from "sonner";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const featuredPost = BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to EduConnect Tech Blog!");
    setNewsletterEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Blog Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-20 grainy">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>EduConnect Learning Insights & Roadmaps</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-heading">
            Articles, Guides & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Engineering Tutorials
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Level up your software engineering, programming, and design skills with actionable articles written by industry practitioners.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search tutorials, Next.js, Python, Career..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-background/90 shadow-sm rounded-full border-border focus-visible:ring-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Article Banner */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <section className="container max-w-6xl mx-auto px-4 -mt-4 mb-16">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="relative aspect-video lg:aspect-auto lg:h-[380px] lg:col-span-6 overflow-hidden bg-slate-100">
                <Image
                  src={getImageUrl(featuredPost.image, "courses")}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-sky-600 text-white font-semibold shadow-md">
                    Featured Guide
                  </Badge>
                </div>
              </div>

              <div className="p-6 lg:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="font-semibold text-sky-600">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {featuredPost.publishedDate}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-sky-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{featuredPost.author.name}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                    Read Post <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category Tabs */}
      <section className="container max-w-6xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 border",
                selectedCategory === cat
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container max-w-6xl mx-auto px-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 border rounded-2xl bg-card">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-foreground">No articles found</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your search query or filter to find what you are looking for.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <Image
                    src={getImageUrl(post.image, "courses")}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed flex-1">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="mt-5 pt-4 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-foreground">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Signup Card */}
      <section className="container max-w-5xl mx-auto px-4 mt-24">
        <div className="rounded-3xl border bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 p-8 md:p-12 text-white shadow-xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-4 text-sky-300">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading">
            Stay Ahead in Web Development & Tech
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Get our latest developer tutorials, coding cheatsheets, and exclusive course discounts delivered straight to your inbox once a week.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-full h-11 focus-visible:ring-sky-400"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 h-11 shrink-0"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-[11px] text-slate-400 mt-3">
            Zero spam. Unsubscribe at any time with one click.
          </p>
        </div>
      </section>
    </div>
  );
}
