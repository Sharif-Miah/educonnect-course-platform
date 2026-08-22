"use client";

import { useState } from "react";
import { ReviewModal } from "./review-modal";
import { Star, MessageSquare } from "lucide-react";

export const GiveReview = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsReviewModalOpen(true)}
        className="w-full rounded-2xl py-3 px-4 text-xs font-bold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 transition-all flex items-center justify-center gap-2 shadow-xs hover:border-slate-300 cursor-pointer"
      >
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span>Leave a Course Review & Rating</span>
      </button>
      <ReviewModal open={isReviewModalOpen} setOpen={setIsReviewModalOpen} />
    </>
  );
};