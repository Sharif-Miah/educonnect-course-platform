import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className = "" }) => {
  return (
    <Image
      className={cn("max-w-[120px] w-auto h-auto", className)}
      src="/logo.svg"
      alt="EduConnect Logo"
      width={109}
      height={31}
      priority
    />
  );
};

