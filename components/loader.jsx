"use client";

import { cn } from "@/lib/utils";

export function EduLoader({ 
  size = "md", 
  text = "Loading...", 
  fullScreen = false,
  className = "" 
}) {
  const sizeMap = {
    sm: {
      ring: "w-12 h-12",
      outerRing: "w-14 h-14",
      icon: "w-6 h-6",
      stroke: "border-2",
      text: "text-xs",
    },
    md: {
      ring: "w-20 h-20",
      outerRing: "w-24 h-24",
      icon: "w-10 h-10",
      stroke: "border-[2.5px]",
      text: "text-sm",
    },
    lg: {
      ring: "w-28 h-28",
      outerRing: "w-32 h-32",
      icon: "w-14 h-14",
      stroke: "border-[3px]",
      text: "text-base",
    },
  };

  const selectedSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className="relative flex items-center justify-center">
        
        {/* Outer Secondary Spinning Orbit Arc */}
        <div 
          className={cn(
            "absolute rounded-full border-t-[#4A3AFF] border-r-transparent border-b-transparent border-l-transparent animate-spin",
            selectedSize.outerRing,
            selectedSize.stroke
          )}
          style={{ animationDuration: "1.2s" }}
        />

        {/* Main Rotating Circle Spinner */}
        <div 
          className={cn(
            "rounded-full border-[#4A3AFF] border-t-transparent animate-spin",
            selectedSize.ring,
            selectedSize.stroke
          )}
          style={{ animationDuration: "0.9s" }}
        />

        {/* Center Signature Logo (Purple Cap & Mint Green Base) */}
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <svg
            className={cn(selectedSize.icon, "drop-shadow-xs")}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Emerald Green Cap Base / Cylinder */}
            <path
              d="M14 26.5V30.5C14 34 18.5 36.5 24 36.5C29.5 36.5 34 34 34 30.5V26.5C31.5 28.5 27.8 29.5 24 29.5C20.2 29.5 16.5 28.5 14 26.5Z"
              fill="#10B981"
            />
            {/* Royal Purple Graduation Cap Top Diamond */}
            <path
              d="M24 12L7 20.5L24 29L41 20.5L24 12Z"
              fill="#4A3AFF"
            />
            {/* Hanging Tassel with bead */}
            <path
              d="M11 22.5V32.5C11 34 9 35.5 8 36.5C10 36.5 12 36 12 34V22.5H11Z"
              fill="#4A3AFF"
            />
            <circle cx="11.5" cy="28.5" r="1.8" fill="#4A3AFF" />
          </svg>
        </div>

      </div>

      {/* Optional Loading Status Text */}
      {text && (
        <p className={cn("font-bold text-slate-700 tracking-wide animate-pulse", selectedSize.text)}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
}

export default EduLoader;
