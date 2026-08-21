"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { Logo } from "./logo";
import { X, Menu, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export function MainNav({ items, children }) {
    const { data: session } = useSession();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loginSession, setLoginSession] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    if (session?.error === "RefreshAccessTokenError") {
        redirect("/login");
    }

    useEffect(() => {
        setLoginSession(session);
        async function fetchMe() {
            try {
                const response = await fetch("/api/me");
                const data = await response.json();
                setLoggedInUser(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchMe();
    }, [session]);

    return (
        <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8 lg:gap-12">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-7">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-[#4A3AFF] transition-colors"
                    >
                        Home
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </Link>

                    <Link
                        href="/#about"
                        className="text-sm font-medium text-gray-700 hover:text-[#4A3AFF] transition-colors"
                    >
                        About
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#4A3AFF] transition-colors outline-none">
                                Courses
                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100">
                            <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                                <Link href="/courses">All Courses</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                                <Link href="/#categories">Top Categories</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#4A3AFF] transition-colors outline-none">
                                Pages
                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100">
                            <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                                <Link href="/pricing">Pricing & Plans</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                                <Link href="/docs">Documentation</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                                <Link href="/register/instructor">Teach on EduPlus</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link
                        href="/blog"
                        className="text-sm font-medium text-gray-700 hover:text-[#4A3AFF] transition-colors"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/#contact"
                        className="text-sm font-medium text-gray-700 hover:text-[#4A3AFF] transition-colors"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-4">
                {/* Search Bar / Trigger */}
                <div className="relative">
                    {searchOpen ? (
                        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 animate-in fade-in">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && searchQuery.trim()) {
                                        window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
                                    }
                                }}
                                className="bg-transparent text-xs sm:text-sm focus:outline-none w-28 sm:w-44 text-gray-800"
                                autoFocus
                            />
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="text-gray-400 hover:text-gray-600 ml-1"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                            className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200/80 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
                        >
                            <Search className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Cart with Badge */}
                <Link
                    href="/account/enrolled-courses"
                    className="relative w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200/80 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
                >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4A3AFF] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                        4
                    </span>
                </Link>

                {/* Enroll Now / Auth Button */}
                {!loginSession ? (
                    <div className="hidden sm:flex items-center gap-2">
                        <Link
                            href="/courses"
                            className="bg-[#4A3AFF] hover:bg-[#3D2FE6] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-indigo-500/25 transition-all"
                        >
                            Enroll Now
                        </Link>
                    </div>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="cursor-pointer">
                                <Avatar className="h-9 w-9 ring-2 ring-[#4A3AFF]/30">
                                    <AvatarImage
                                        src={loggedInUser?.profilePicture}
                                        alt="@user"
                                    />
                                    <AvatarFallback className="bg-[#4A3AFF] text-white text-xs">
                                        EP
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl p-1.5 shadow-xl">
                            <DropdownMenuItem className="cursor-pointer rounded-lg" asChild>
                                <Link href="/account">Profile</Link>
                            </DropdownMenuItem>
                            {((session?.user?.role?.toLowerCase() === "instructor" || session?.user?.role?.toLowerCase() === "teacher") ||
                              (loggedInUser?.role?.toLowerCase() === "instructor" || loggedInUser?.role?.toLowerCase() === "teacher")) && (
                                <DropdownMenuItem className="cursor-pointer rounded-lg" asChild>
                                    <Link href="/dashboard">Instructor Dashboard</Link>
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="cursor-pointer rounded-lg" asChild>
                                <Link href="/account/enrolled-courses">
                                    My Courses
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer rounded-lg text-red-600 focus:text-red-600"
                                asChild
                            >
                                <Link
                                    href="#"
                                    onClick={() => {
                                        signOut();
                                    }}
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}

                {/* Mobile Hamburger Toggle */}
                <button
                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    aria-label="Toggle menu"
                >
                    {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}

