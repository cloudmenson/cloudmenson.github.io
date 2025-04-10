"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { LangSelector } from "@/app/components";

export const PrivateHeader = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <header className="h-[60px] sticky top-0 flex items-center z-50 w-full bg-header dark:bg-header shadow-sm">
      <div className="h-full w-full flex items-center justify-between px-[2.5vw]">
        <div className="flex items-center gap-4">
          <button onClick={onOpen} className="md:hidden text-white">
            <Menu size={24} />
          </button>
          <Link href="/home" className="text-lg font-bold color-foreground">
            <h1 className="text-[20px]">Crew Helper</h1>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:block">
            <LangSelector />
          </div>
        </div>
      </div>
    </header>
  );
};
