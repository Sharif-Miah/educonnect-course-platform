import { LoginForm } from "./_components/login-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden py-8 sm:py-10 px-4 sm:px-6">
      
      {/* ======================================================== */}
      {/* BACKGROUND IMAGE WITH LUXURY DARK GLASS OVERLAY */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/auth_bg.jpg"
          alt="Campus Study Background"
          fill
          priority
          unoptimized
          className="object-cover object-center scale-105"
        />
        {/* Dark Ambient Gradient Overlay with Indigo/Emerald Light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-900/70 to-indigo-950/75 backdrop-blur-[3px]" />
        
        {/* Subtle grid line overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Top Header Link */}
      <div className="container max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Center Auth Card */}
      <div className="my-auto py-6 relative z-10 w-full">
        <LoginForm />
      </div>

      {/* Bottom Footer Note */}
      <div className="text-center text-xs text-slate-300 font-medium relative z-10">
        <p>© {new Date().getFullYear()} EduPlus Learning Platform. All rights reserved.</p>
      </div>

    </div>
  );
};

export default LoginPage;
