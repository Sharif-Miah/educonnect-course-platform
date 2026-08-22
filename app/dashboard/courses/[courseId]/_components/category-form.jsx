"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { updateCourse } from "@/app/actions/course";

const formSchema = z.object({
  value: z.string().min(1),
});

export const CategoryForm = ({
  initialData,
  courseId,
  options
}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: initialData?.value || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const selectedCategory = options.find(option => option.value === values.value);
      await updateCourse(courseId, {"category": selectedCategory.id})
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const selectedOptions = options.find(
    (option) => option.value === initialData.value
  );

  return (
    <div className="mt-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xs text-slate-900 dark:text-slate-100 transition-colors">
      <div className="font-bold text-sm flex items-center justify-between">
        Course Category
        <Button variant="ghost" onClick={toggleEdit} className="dark:text-slate-200 dark:hover:bg-slate-800">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Category
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "text-xs sm:text-sm mt-2 font-medium",
            !initialData.value ? "text-slate-400 italic" : "text-slate-700 dark:text-slate-200"
          )}
        >
          {selectedOptions?.label || "No category selected"}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Combobox options={options} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit" className="bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white rounded-xl">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
