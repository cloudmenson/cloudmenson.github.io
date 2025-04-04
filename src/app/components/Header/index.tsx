"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FlyHeader } from "@/app/assets";
import Image from "next/image";
import { cn } from "@/app/utils/tailwind-merge";
import { LangSelector } from "@/app/components";
import { menuNavigation } from "@/app/utils/navigation";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 flex items-center z-50 h-[3.5vw] w-full bg-header dark:bg-header shadow-sm">
      <div className="h-full w-full flex items-center justify-between px-[2.5vw]">
        <Link href="/" className="text-lg font-bold color-foreground">
          <h1 className="text-[1vw]">Crew Helper</h1>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:block">
            <LangSelector />
          </div>

          <MenuIcon
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              initial={{ x: "100%" }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-3/4 sm:w-2/5 max-w-xs h-full bg-menu shadow-lg px-6 py-6 flex flex-col gap-4"
            >
              <button
                className="flex justify-end cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-3 mt-4">
                {menuNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-menu-text font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Image
                alt="Fly"
                loading="lazy"
                src={FlyHeader}
                className={cn(
                  "w-full",
                  "h-auto",
                  "mt-auto",
                  "object-fit: cover"
                )}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
