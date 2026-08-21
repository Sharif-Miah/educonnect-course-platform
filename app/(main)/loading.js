import { EduLoader } from "@/components/loader";

export default function Loading() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-24 bg-[#F8FAFC]">
      <EduLoader size="lg" text="Loading EduPlus..." />
    </div>
  );
}
