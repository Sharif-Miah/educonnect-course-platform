import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import AuthProvider from "@/components/auth-provider";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Categories",
    href: "/#categories",
  },
  {
    title: "Live Classes",
    href: "/#live-classes",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="z-50 bg-white/95 backdrop-blur-md sticky top-0 left-0 right-0 border-b border-gray-100 shadow-sm transition-all">
        <AuthProvider>
          <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
            <MainNav items={navLinks} />
          </div>
        </AuthProvider>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};
export default MainLayout;

