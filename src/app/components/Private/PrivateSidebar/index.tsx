"use client";

import Link from "next/link";
import {
  Home,
  User,
  BookOpen,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";

export const PrivateSidebar = () => {
  return (
    <aside className="px-[1.5vw] py-[2vw] hidden md:flex fixed left-0 top-0 h-screen w-[250px] bg-gradient-to-r from-gray-900 to-section-bg shadow-xl z-40 flex-col">
      <nav className="flex flex-col gap-4 text-white font-medium">
        <Link href="/home" className="flex items-center gap-2">
          <LayoutDashboard size={24} />
          Dashboard
        </Link>

        <Link href="/home/learning-hub" className="flex items-center gap-2">
          <BookOpen size={24} />
          Learning Hub
        </Link>

        <Link href="/home/profile" className="flex items-center gap-2">
          <User size={24} />
          Profile
        </Link>

        <Link href="/" className="flex items-center gap-2">
          <Home size={24} />
          Main
        </Link>

        <Link href="/home/help" className="flex items-center gap-2">
          <HelpCircle size={24} />
          Help
        </Link>
      </nav>
    </aside>
  );
};
