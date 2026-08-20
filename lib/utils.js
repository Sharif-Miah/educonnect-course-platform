import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(thumbnail, type = "courses") {
  if (!thumbnail) {
    return type === "categories"
      ? "/assets/images/categories/design.jpg"
      : "/assets/images/courses/course_1.png";
  }
  if (
    thumbnail.startsWith("http://") ||
    thumbnail.startsWith("https://") ||
    thumbnail.startsWith("//")
  ) {
    return thumbnail;
  }
  if (thumbnail.startsWith("/")) {
    return thumbnail;
  }
  return `/assets/images/${type}/${thumbnail}`;
}

