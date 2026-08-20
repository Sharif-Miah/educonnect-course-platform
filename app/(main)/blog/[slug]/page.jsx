import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, getImageUrl } from "@/lib/utils";
import { BLOG_POSTS } from "@/lib/blog-data";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.author.name === post.author.name)
  ).slice(0, 2);

  return (
    <article className="min-h-screen pb-24">
      {/* Header / Breadcrumb */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-sky-600 text-white text-xs">{post.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          {/* Author bar */}
          <div className="mt-8 pt-6 border-t flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border shadow-sm">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Tags:</span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-md bg-background border px-2 py-0.5 text-xs font-medium text-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="container max-w-4xl mx-auto px-4 my-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border shadow-md bg-slate-100">
          <Image
            src={getImageUrl(post.image, "courses")}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Content Body */}
      <section className="container max-w-3xl mx-auto px-4">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-base prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-5 prose-pre:shadow-md">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-semibold mt-8 mb-3 text-foreground">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("```")) {
              const codeLines = trimmed.split("\n").slice(1, -1).join("\n");
              return (
                <div key={idx} className="my-6 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm font-mono text-emerald-400 shadow-lg border border-slate-800">
                  <pre className="p-0 m-0 bg-transparent text-emerald-400">
                    <code>{codeLines}</code>
                  </pre>
                </div>
              );
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").map((line) => line.replace(/^- /, "").trim());
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-0">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (trimmed.startsWith("> ")) {
              return (
                <div key={idx} className="my-6 rounded-xl border-l-4 border-sky-500 bg-sky-50 dark:bg-sky-950/30 p-4 text-sm text-foreground">
                  {trimmed.replace("> ", "")}
                </div>
              );
            }
            return (
              <p key={idx} className="text-sm md:text-base leading-relaxed text-muted-foreground my-4">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Related Course Callout Card */}
        <div className="mt-14 rounded-3xl border bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white shadow-md flex items-center justify-center shrink-0">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">Want to master this hands-on?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Enroll in our comprehensive, certified courses with real-world projects and direct instructor Q&A support.
            </p>
          </div>
          <Link
            href="/courses"
            className={cn(buttonVariants({ size: "default" }), "bg-sky-600 hover:bg-sky-700 text-white font-bold shrink-0")}
          >
            Explore Courses <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t">
            <h3 className="text-xl font-bold text-foreground mb-6 font-heading">
              Related Articles & Tutorials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-sky-600">{rel.category}</span>
                    <h4 className="text-base font-bold text-foreground group-hover:text-sky-600 transition-colors mt-1 line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs text-muted-foreground">
                    <span>{rel.readTime}</span>
                    <span className="font-semibold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
