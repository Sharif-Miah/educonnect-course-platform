"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ModuleList } from "./module-list";

import { createModule } from "@/app/actions/module";
import { getSlug } from "@/lib/convertData";
import { reOrderModules } from "@/app/actions/module";

const formSchema = z.object({
  title: z.string().min(1),
});

export const ModulesForm = ({ initialData, courseId }) => {
  const [modules, setModules] = useState(initialData);
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => setIsCreating((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {

      const formData = new FormData();
      formData.append("title", values?.title);
      formData.append("slug", getSlug(values?.title));
      formData.append("courseId", courseId);
      formData.append("order", modules.length);

      const createdModule = await createModule(formData);

      setModules((modules) => [
        ...modules,
        {
          id: createdModule?._id.toString(),
          title: values.title,
        },
      ]);
      toast.success("Module created");
      toggleCreating();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onReorder = async (updateData) => {
    console.log({ updateData });
    try {

      reOrderModules(updateData);
      setIsUpdating(true);

      toast.success("Chapters reordered");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id) => {
    router.push(`/dashboard/courses/${courseId}/modules/${id}`);
  };

  return (
    <div className="relative mt-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xs text-slate-900 dark:text-slate-100 transition-colors">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-900/40 top-0 right-0 rounded-2xl flex items-center justify-center backdrop-blur-xs z-10">
          <Loader2 className="animate-spin h-6 w-6 text-[#4A3AFF]" />
        </div>
      )}
      <div className="font-bold text-sm flex items-center justify-between">
        Course Modules
        <Button variant="ghost" onClick={toggleCreating} className="dark:text-slate-200 dark:hover:bg-slate-800">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a module
            </>
          )}
        </Button>
      </div>

      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the course...'"
                      className="bg-slate-50/50 dark:bg-slate-800 border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type="submit" className="bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white rounded-xl">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !modules?.length && "text-slate-400 italic"
          )}
        >
          {!modules?.length && "No modules created yet."}
          <ModuleList
            onEdit={onEdit}
            onReorder={onReorder}
            items={modules || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
          Drag & drop to reorder modules
        </p>
      )}
    </div>
  );
};
