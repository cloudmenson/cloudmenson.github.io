"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { languageConfig } from "@/app/i18n/languageConfig";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

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
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="p-[0.4vw] bg-transparent border w-[8vw] border-gray-300 rounded-[0.4vw] shadow hover:scale-98 active:scale-96 transition cursor-pointer"
      >
        <p className="text-[0.8vw]">
          {languageConfig[i18n.language]?.label ?? i18n.language}
        </p>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            exit={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-md z-10"
          >
            {Object.entries(languageConfig).map(([key, { label, icon }]) => (
              <li key={key}>
                <button
                  onClick={() => handleSelect(key as string)}
                  className={`flex flex-row items-center w-full px-[0.5vw] py-[0.4vw] text-left transition cursor-pointer
                    ${
                      i18n.language === key
                        ? "bg-gray-200 font-semibold text-gray-800"
                        : "text-gray-700"
                    }
                    hover:bg-gray-100`}
                >
                  <p className="mr-2 w-fit-content text-[0.8vw]">{label}</p>

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
