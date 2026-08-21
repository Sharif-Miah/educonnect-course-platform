"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createCourse } from "@/app/actions/course";
import { PlusCircle, Sparkles, ArrowLeft, ArrowRight, BookOpen, Layers } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required!",
  }),
  description: z.string().min(1, {
    message: "Description is required!",
  }),
});

const AddCourse = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const course = await createCourse(values);
      router.push(`/dashboard/courses/${course?._id}`);
      toast.success("Course created successfully!");
    } catch (error) {
      toast.error("Something went wrong while creating the course.");
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 bg-[#F8FAFC] min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-2xl w-full">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/dashboard/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#4A3AFF] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>
        </div>

        {/* Elevated Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100/90 space-y-6">
          
          {/* Header */}
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <div className="inline-flex items-center gap-1.5 bg-[#4A3AFF]/10 text-[#4A3AFF] px-3 py-1 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1 of 2 • Basic Information</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Name Your Course
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              What would you like to name your course? Do not worry, you can always change this and add modules later.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Course Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-bold text-slate-700">
                      Course Title <span className="text-rose-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g. 'Advanced Next.js 14 & Full-Stack Mastery'"
                        {...field}
                        className="bg-slate-50/50 border-slate-200/90 rounded-2xl py-3 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Course Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xs font-bold text-slate-700">
                      Short Overview & Description <span className="text-rose-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write a brief overview of what students will learn in this course..."
                        rows={4}
                        className="bg-slate-50/50 border-slate-200/90 rounded-2xl p-4 text-xs sm:text-sm focus:ring-2 focus:ring-[#4A3AFF]/30 focus:border-[#4A3AFF] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[11px] text-slate-400">
                      Provide 2-3 sentences summarizing the key takeaways of this course.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <Link
                  href="/dashboard/courses"
                  className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 transition"
                >
                  Cancel
                </Link>
                
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  <span>{isSubmitting ? "Creating..." : "Continue to Builder"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default AddCourse;
