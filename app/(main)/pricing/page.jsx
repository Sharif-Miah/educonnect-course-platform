"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Sparkles, HelpCircle, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    id: "starter",
    description: "Perfect for beginners exploring coding and design essentials.",
    monthlyPrice: 0,
    annualPrice: 0,
    popular: false,
    badge: "Free Forever",
    buttonText: "Start Learning Free",
    buttonHref: "/courses",
    buttonVariant: "outline",
    features: [
      "Access to all free course previews",
      "Community discussion forum access",
      "Standard definition (720p) video streaming",
      "Public learner profile & showcase",
      "Basic chapter quizzes",
      "Monthly platform updates & newsletter",
    ],
    notIncluded: [
      "Verified course completion certificates",
      "Downloadable source code & assets",
      "Instructor Q&A and 1-on-1 feedback",
      "Offline video download support",
      "Team analytics and group licensing",
    ],
  },
  {
    name: "Pro All-Access",
    id: "pro",
    description: "Unlimited access to all existing and future premium courses with certificates.",
    monthlyPrice: 19,
    annualPrice: 15,
    popular: true,
    badge: "Most Popular",
    buttonText: "Get All-Access Pro",
    buttonHref: "/register/student",
    buttonVariant: "default",
    features: [
      "Unlimited access to 50+ premium courses",
      "Verified digital certificates of completion",
      "Downloadable full project source codes",
      "Full HD & 4K video playback",
      "Interactive coding assignments & quizzes",
      "Priority instructor Q&A response within 24h",
      "Private Discord VIP community access",
      "Early access to newly released courses",
    ],
    notIncluded: [
      "1-on-1 private mentoring sessions",
      "Custom team learning paths",
    ],
  },
  {
    name: "Team & Enterprise",
    id: "enterprise",
    description: "Empower your entire team with custom roadmaps, mentorship, and analytics.",
    monthlyPrice: 49,
    annualPrice: 39,
    popular: false,
    badge: "For Organizations",
    buttonText: "Contact Enterprise",
    buttonHref: "/register/instructor",
    buttonVariant: "outline",
    features: [
      "Everything in Pro All-Access",
      "Up to 10 team seats included",
      "Centralized manager dashboard & analytics",
      "Dedicated 1-on-1 instructor office hours",
      "Custom internal training tracks",
      "Invoice and purchase order billing",
      "Dedicated customer success manager",
      "99.9% uptime SLA guarantee",
    ],
    notIncluded: [],
  },
];

const comparisonFeatures = [
  {
    category: "Learning Content",
    items: [
      { name: "Free courses & preview lessons", starter: true, pro: true, enterprise: true },
      { name: "Full access to 50+ Premium courses", starter: false, pro: true, enterprise: true },
      { name: "Python, JavaScript, React & Fullstack paths", starter: "Limited", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Downloadable lesson code & assets", starter: false, pro: true, enterprise: true },
      { name: "New courses added every month", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Assessment & Credentials",
    items: [
      { name: "Chapter quizzes & tests", starter: true, pro: true, enterprise: true },
      { name: "Real-world project evaluations", starter: false, pro: true, enterprise: true },
      { name: "Verified shareable certificates (LinkedIn)", starter: false, pro: true, enterprise: true },
      { name: "Certificate QR verification code", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Support & Mentorship",
    items: [
      { name: "Community forum support", starter: true, pro: true, enterprise: true },
      { name: "Priority instructor direct Q&A", starter: false, pro: "Within 24h", enterprise: "Within 4h" },
      { name: "1-on-1 live mentoring sessions", starter: false, pro: false, enterprise: "Monthly 2 sessions" },
      { name: "Dedicated team manager dashboard", starter: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "How does the 14-day money-back guarantee work?",
    answer:
      "If you are not completely satisfied with your EduConnect Pro subscription within the first 14 days of purchase, simply reach out to our support team and we will issue a full refund—no questions asked.",
  },
  {
    question: "Can I switch between monthly and annual plans?",
    answer:
      "Yes! You can upgrade, downgrade, or switch between monthly and annual billing cycles at any time from your Account Settings page. When upgrading, the prorated difference will be applied automatically.",
  },
  {
    question: "Are the certificates verified and shareable?",
    answer:
      "Every certificate issued upon completing 100% of a course's lessons and quizzes includes a unique verification hash and QR code that can be verified online or shared directly on your LinkedIn profile and resume.",
  },
  {
    question: "Can I buy individual courses without a subscription?",
    answer:
      "Yes! You can purchase individual courses with lifetime access directly from any course page. However, our Pro All-Access subscription provides unlimited access to all existing and future courses at a fraction of the cost.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major credit/debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and localized payment options securely powered by Stripe.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 grainy">
        <div className="container max-w-5xl mx-auto text-center relative z-10 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-semibold shadow-sm backdrop-blur mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Invest in your career with zero risk</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-heading">
            Simple, Transparent Pricing <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              for Lifelong Learning
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Get unlimited access to industry-grade programming, design, and tech courses.
            Learn from seasoned instructors and earn accredited certificates.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
                isAnnual ? "bg-sky-600" : "bg-slate-300"
              )}
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={cn(
                  "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  isAnnual ? "translate-x-7" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-1.5", isAnnual ? "text-foreground font-semibold" : "text-muted-foreground")}>
              Annual Billing
              <Badge variant="success" className="text-[10px] uppercase font-bold py-0.5 px-2">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container max-w-7xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const billedNote =
              plan.monthlyPrice === 0
                ? "Free forever"
                : isAnnual
                ? `Billed annually ($${plan.annualPrice * 12}/year)`
                : "Billed monthly";

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg",
                  plan.popular
                    ? "border-sky-500 ring-2 ring-sky-500/20 shadow-sky-100 dark:shadow-none scale-100 md:-translate-y-2"
                    : "border-border"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white border-0 shadow-md font-semibold px-3 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">{billedNote}</p>
                </div>

                <Link
                  href={plan.buttonHref}
                  className={cn(
                    buttonVariants({
                      variant: plan.popular ? "default" : plan.buttonVariant,
                      size: "lg",
                    }),
                    "w-full font-semibold shadow-sm",
                    plan.popular && "bg-sky-600 hover:bg-sky-700 text-white"
                  )}
                >
                  {plan.buttonText}
                </Link>

                <div className="mt-8 flex-1">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                    What&apos;s included:
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-400 opacity-60">
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="container max-w-5xl mx-auto px-4 mt-16">
        <div className="rounded-2xl border bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-sky-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-slate-900">14-Day 100% Risk-Free Guarantee</h4>
            <p className="text-sm text-slate-600 mt-1">
              Try EduConnect Pro risk-free. If you don&apos;t feel you&apos;re leveling up your skills within 14 days,
              we&apos;ll refund 100% of your payment with zero hassle.
            </p>
          </div>
          <Link
            href="/courses"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "bg-white hover:bg-slate-50 shrink-0")}
          >
            Explore Courses First
          </Link>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="container max-w-5xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
            Detailed Plan Comparison
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Compare all features side-by-side to choose the best learning plan for your goals.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-xs font-semibold text-muted-foreground uppercase">
                <th className="py-4 px-6">Features</th>
                <th className="py-4 px-4 text-center">Starter</th>
                <th className="py-4 px-4 text-center text-sky-600 font-bold">Pro All-Access</th>
                <th className="py-4 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {comparisonFeatures.map((cat, catIdx) => (
                <div key={catIdx} className="contents">
                  <tr className="bg-muted/30">
                    <td colSpan={4} className="py-3 px-6 font-bold text-xs uppercase tracking-wider text-foreground">
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="hover:bg-muted/20 transition-colors">
                      <td className="py-3.5 px-6 font-medium text-foreground">{item.name}</td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.starter === "boolean" ? (
                          item.starter ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-muted-foreground font-medium">{item.starter}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-sky-50/40 dark:bg-sky-950/20">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <Check className="w-4 h-4 text-sky-600 mx-auto font-bold" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-sky-700 font-semibold">{item.pro}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-semibold text-foreground">{item.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container max-w-4xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border rounded-xl px-5 bg-card shadow-sm hover:border-slate-300 transition-colors"
            >
              <AccordionTrigger className="text-base font-semibold text-left py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container max-w-5xl mx-auto px-4 mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-8 md:p-14 text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-300 border border-sky-400/30 mb-4">
              Start learning today
            </span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
              Ready to accelerate your tech career?
            </h3>
            <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
              Join thousands of developers and designers mastering in-demand skills on EduConnect with accredited certificates.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className={cn(buttonVariants({ size: "lg" }), "bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold")}
              >
                Browse All Courses <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link
                href="/register/instructor"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-white hover:bg-white/10")}
              >
                Teach on EduConnect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
