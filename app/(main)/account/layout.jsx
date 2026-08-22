import AccountSidebar from "./component/account-sidebar";
import { Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

function Layout({ tabs }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0b1120] transition-colors duration-200">
      
      {/* ======================================================== */}
      {/* HERO BANNER: My Account & Student Dashboard */}
      {/* ======================================================== */}
      <div className="bg-slate-950 text-white relative pt-12 pb-16 lg:pt-14 lg:pb-18 overflow-hidden border-b border-slate-800/80">
        
        {/* Glow Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#4A3AFF]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#14C88C]/20 rounded-full blur-3xl" />
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#4A3AFF] font-bold">Account</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#4A3AFF]/20 border border-[#4A3AFF]/40 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-[#4A3AFF]" />
            <span>Student & Account Center</span>
          </div>

          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              My Profile & Dashboard
            </h1>
            {/* Signature Hand-drawn Wavy Underline */}
            <div className="mt-2.5">
              <svg className="w-36 sm:w-48 text-[#4A3AFF]" viewBox="0 0 144 14" fill="none">
                <path d="M2 10.5C28.5 2 64.5 14 142 3.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal pt-1">
            Manage your personal profile, security credentials, contact details, and track your enrolled learning paths.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MAIN ACCOUNT CONTENT: Sidebar Navigation + Tab Contents */}
      {/* ======================================================== */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Account Profile Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <AccountSidebar />
          </div>

          {/* Right Column: Tab Contents (8 cols) */}
          <div className="lg:col-span-8">
            {tabs}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Layout;
