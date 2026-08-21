"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";
import { createCheckoutSession } from "@/app/actions/stripe";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const EnrollCourse = ({ asLink, courseId }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formAction = async (data) => {
    // 1. If not logged in, seamlessly redirect to login page with return callback
    if (!session?.user) {
      toast.info("Please log in to enroll in this course.");
      router.push(`/login?callbackUrl=/courses/${courseId}`);
      return;
    }

    setLoading(true);

    try {
      const response = await createCheckoutSession(data);
      if (response?.url) {
        window.location.assign(response.url);
      } else if (response?.loginRequired) {
        router.push(`/login?callbackUrl=/courses/${courseId}`);
      } else {
        toast.error("Failed to initiate checkout session.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action={formAction} className="w-full">
      <input type="hidden" name="courseId" value={courseId} />
      {asLink ? (
        <Button
          type="submit"
          variant="ghost"
          disabled={loading}
          className="text-xs text-sky-700 h-7 gap-1 hover:text-[#4A3AFF]"
        >
          {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Enroll"}
          <ArrowRight className="w-3" />
        </Button>
      ) : (
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-sm sm:text-base font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Redirecting to Checkout...</span>
            </>
          ) : (
            <>
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </form>
  );
};
