import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export function SiteFooter({ className }) {
  return (
    <footer className={cn("border-t bg-muted/30 py-12 md:py-16", className)}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b">
          <div className="space-y-3 md:col-span-1">
            <Logo />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Empowering developers, designers, and tech leaders worldwide through interactive courses, projects, and verified credentials.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              Explore Learning
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/courses" className="hover:text-foreground transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-foreground transition-colors">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Membership & Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              Resources & Insights
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Developer Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation & Guides
                </Link>
              </li>
              <li>
                <Link href="/register/instructor" className="hover:text-foreground transition-colors">
                  Teach on EduConnect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
              Account & Portal
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/login" className="hover:text-foreground transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register/student" className="hover:text-foreground transition-colors">
                  Student Registration
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-foreground transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} EduConnect Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with passion for learners everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

