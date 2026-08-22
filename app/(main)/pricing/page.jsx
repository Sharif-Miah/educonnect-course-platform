"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Sparkles, HelpCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CtaBanners from "@/components/home/CtaBanners";

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
    isPrimary: false,
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
    buttonHref: "/register",
    isPrimary: true,
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
    buttonHref: "/register",
    isPrimary: false,
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
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container max-w-5xl mx-auto text-center relative z-10 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/90 dark:bg-indigo-950/60 px-4 py-1.5 text-xs font-bold text-[#4A3AFF] dark:text-indigo-300 shadow-xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Invest in your career with zero risk</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Simple, Transparent Pricing <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#4A3AFF] via-indigo-500 to-[#14C88C] bg-clip-text text-transparent">
              for Lifelong Learning
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Get unlimited access to industry-grade programming, design, and tech courses.
            Learn from seasoned instructors and earn accredited certificates.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn("text-xs sm:text-sm font-bold transition-colors", !isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400")}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#4A3AFF] focus:ring-offset-2",
                isAnnual ? "bg-[#4A3AFF]" : "bg-slate-300 dark:bg-slate-700"
              )}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle Billing Cycle"
            >
              <span
                className={cn(
                  "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
                  isAnnual ? "translate-x-7" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors", isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400")}>
              Annual Billing
              <span className="text-[10px] uppercase font-black py-0.5 px-2 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container max-w-7xl mx-auto px-4 -mt-4 pb-12">
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
                  "relative flex flex-col rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-2xl border",
                  plan.popular
                    ? "bg-white dark:bg-slate-900 border-[#4A3AFF] dark:border-[#4A3AFF] ring-2 ring-[#4A3AFF]/30 shadow-indigo-500/10 md:-translate-y-3"
                    : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#4A3AFF] to-indigo-600 text-white border-0 shadow-lg font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[32px] font-medium leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                      ${price}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">{billedNote}</p>
                </div>

                <Link
                  href={plan.buttonHref}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs text-center",
                    plan.isPrimary
                      ? "bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white shadow-md shadow-indigo-500/20"
                      : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  )}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-8 flex-1">
                  <p className="text-xs font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                    What&apos;s included:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.8]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-400 dark:text-slate-500 opacity-60">
                        <X className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
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
      <section className="container max-w-5xl mx-auto px-4 mt-8">
        <div className="rounded-3xl border border-indigo-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-[#4A3AFF] dark:text-indigo-400 shadow-xs flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">14-Day 100% Risk-Free Guarantee</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-normal leading-relaxed">
              Try EduConnect Pro risk-free. If you don&apos;t feel you&apos;re leveling up your skills within 14 days,
              we&apos;ll refund 100% of your payment with zero hassle.
            </p>
          </div>
          <Link
            href="/courses"
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold px-5 py-2.5 rounded-2xl text-xs sm:text-sm shrink-0 transition-colors shadow-xs"
          >
            Explore Courses First
          </Link>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="container max-w-5xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Detailed Plan Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Compare all features side-by-side to choose the best learning plan for your goals.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">
                <th className="py-4 px-6">Features</th>
                <th className="py-4 px-4 text-center">Starter</th>
                <th className="py-4 px-4 text-center text-[#4A3AFF] dark:text-indigo-400 font-black">Pro All-Access</th>
                <th className="py-4 px-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {comparisonFeatures.map((cat, catIdx) => (
                <div key={catIdx} className="contents">
                  <tr className="bg-slate-50/60 dark:bg-slate-800/40">
                    <td colSpan={4} className="py-3 px-6 font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-slate-800 dark:text-slate-200">{item.name}</td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.starter === "boolean" ? (
                          item.starter ? (
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[2.5]" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.starter}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-indigo-50/30 dark:bg-indigo-950/20">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <Check className="w-4 h-4 text-[#4A3AFF] dark:text-indigo-400 mx-auto font-bold stroke-[3]" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-[#4A3AFF] dark:text-indigo-300 font-bold">{item.pro}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[2.5]" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.enterprise}</span>
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
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A3AFF] dark:text-indigo-300 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl px-5 bg-white dark:bg-slate-900 shadow-xs hover:border-[#4A3AFF]/40 transition-colors"
            >
              <AccordionTrigger className="text-sm sm:text-base font-bold text-left py-4 hover:no-underline text-slate-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pb-4 leading-relaxed font-normal">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Banners */}
      <div className="mt-12">
        <CtaBanners />
      </div>

    </div>
  );
}
