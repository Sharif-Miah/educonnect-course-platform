"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Send, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle,
  Headphones,
  Globe,
  Building2,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import CtaBanners from "@/components/home/CtaBanners";

const FAQ_ITEMS = [
  {
    q: "How do I access my courses after enrolling?",
    a: "Immediately after checkout, you can access your courses by visiting your Student Dashboard at /account/enrolled-courses or by clicking on 'My Courses' in the top right menu.",
  },
  {
    q: "Are the course certificates verified and shareable on LinkedIn?",
    a: "Yes! Every masterclass on EduPlus comes with a tamper-proof digital certificate that includes a unique verification code and 1-click LinkedIn export.",
  },
  {
    q: "Can I apply to become an instructor or tutor on EduPlus?",
    a: "Absolutely! We welcome passionate educators and industry veterans. You can apply directly through our Instructor Registration page at /register/instructor.",
  },
  {
    q: "What is your refund policy if I am not satisfied with a course?",
    a: "We offer a 100% money-back guarantee within 14 days of purchase, as long as you have not completed more than 25% of the curriculum.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! Your message has been sent successfully. Our advisory team will reach out within 2-4 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER: Get in Touch */}
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
            <span className="text-[#4A3AFF] font-bold">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>24/7 Student Advisory & Enterprise Support</span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                Get in Touch with Us
              </h1>
              {/* Signature Hand-drawn Wavy Underline */}
              <div className="mt-2.5">
                <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                  <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
              Have questions about course admissions, verified certificates, or corporate partnerships? Our expert advisory team is here to help you achieve your goals.
            </p>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. DIRECT CONTACT CHANNELS (3 CARDS) */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Visit Office */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/90 space-y-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4A3AFF] flex items-center justify-center shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Main Campus & HQ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              Level 8, Silicon Center, 120 Gulshan Avenue, Dhaka 1212, Bangladesh
            </p>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 pt-1">
              <Clock className="w-3.5 h-3.5 text-[#4A3AFF]" />
              <span>Open Mon – Fri from 9:00 AM – 7:00 PM</span>
            </p>
          </div>

          {/* Card 2: Phone Helpline */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/90 space-y-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#14C88C] flex items-center justify-center shadow-xs">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Call Direct Helpline
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              +880 1700 000000 <br />
              +1 (800) 555-0199 (Toll-Free International)
            </p>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 pt-1">
              <Headphones className="w-3.5 h-3.5 text-[#14C88C]" />
              <span>Live Student Advisors on standby</span>
            </p>
          </div>

          {/* Card 3: Email Support */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/90 space-y-3 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shadow-xs">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Email Support & Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              support@eduplus.com <br />
              admissions@eduplus.com
            </p>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Average response time within 2 hours</span>
            </p>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. INTERACTIVE CONTACT FORM & FAQ ACCORDION SPLIT */}
      {/* ======================================================== */}
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100/90 space-y-6">
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <div className="inline-flex items-center gap-1.5 bg-[#4A3AFF]/10 text-[#4A3AFF] px-3 py-1 rounded-full text-xs font-bold mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Us a Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Leave your message below
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Fill out the form and our advisory specialist will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sharif Miah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1700 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] transition-all"
                  />
                </div>

                {/* Topic / Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Inquiry Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl py-3 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Course Enrollment">Course Enrollment & Pricing</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Teach on EduPlus">Teach on EduPlus / Become Tutor</option>
                    <option value="Corporate Training">Corporate & Enterprise Training</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  How can we help you? <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your inquiry, question, or custom request in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-8 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: FAQ & Instant Help Accordions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <HelpCircle className="w-5 h-5 text-[#4A3AFF]" />
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-2xl p-4 transition-all duration-200 cursor-pointer ${
                        isOpen ? "bg-indigo-50/50 border-indigo-200/80" : "bg-slate-50/50 border-slate-100 hover:bg-slate-100/60"
                      }`}
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.q}
                        </h4>
                        <span className="text-xs font-bold text-[#4A3AFF]">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      {isOpen && (
                        <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2.5 pt-2 border-t border-indigo-100 animate-in fade-in">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Live Consultation Card */}
            <div className="bg-gradient-to-r from-slate-950 to-indigo-950 rounded-3xl p-6 sm:p-7 text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#14C88C]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-[#14C88C]/20 border border-[#14C88C]/40 px-3 py-0.5 rounded-full text-[11px] font-bold text-emerald-300">
                  <Sparkles className="w-3 h-3" />
                  <span>Immediate Assistance</span>
                </div>
                <h4 className="text-lg font-extrabold tracking-tight">
                  Need an urgent course consultation?
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Connect instantly with our academic counselors via WhatsApp or direct line.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+8801700000000"
                    className="inline-flex items-center gap-2 bg-[#14C88C] hover:bg-[#0fa874] text-white text-xs font-extrabold px-6 py-2.5 rounded-full shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call +880 1700 000000</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. SIGNATURE CTA BANNERS */}
      {/* ======================================================== */}
      <CtaBanners />

    </div>
  );
}
