"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { Globe } from "lucide-react";

import { languageConfig } from "@/app/i18n/languageConfig";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { cn } from "@/app/utils/tailwind-merge";

export const LangSelector = () => {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setOpen(false));

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-[0.4vw] bg-transparent shadow transition cursor-pointer"
      >
        <Globe />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            exit={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-[0.4vw] min-w-[6vw] bg-white text-black border border-gray-200 rounded shadow-md z-10"
          >
            {Object.entries(languageConfig).map(([key, { label, icon }]) => (
              <li key={key}>
                <button
                  onClick={() => handleSelect(key as string)}
                  className={cn(
                    "flex items-center w-full px-[0.6vw] py-[0.4vw] text-left transition cursor-pointer hover:bg-gray-100",
                    i18n.language === key
                      ? "bg-gray-200 font-semibold text-gray-800"
                      : "text-gray-700"
                  )}
                >
                  <p className="mr-2 text-[0.8vw] whitespace-nowrap overflow-hidden text-ellipsis">
                    {label}
                  </p>

                  {icon}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
