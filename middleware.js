import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { LOGIN } from "@/lib/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const pathname = nextUrl.pathname;

  // 1. Static and Next.js internal assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/register") ||
    pathname.startsWith("/assets") ||
    pathname.includes(".")
  ) {
    return;
  }

  // 2. Explicitly Protected Routes
  const isProtected =
    pathname.startsWith("/account") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/enroll-success") ||
    pathname.includes("/lesson");

  if (isProtected && !isAuthenticated) {
    const loginUrl = new URL(LOGIN, nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};