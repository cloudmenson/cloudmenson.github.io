"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import i18n from "@/app/i18n";
import { cn } from "@/app/utils/tailwind-merge";

const LANGUAGES = [
  { code: "uk", label: "УКР", flag: "🇺🇦" },
  { code: "en", label: "ENG", flag: "🇬🇧" },
];

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("selected-language");
    if (stored) {
      setCurrentLang(stored);
      i18n.changeLanguage(stored);
    }
  }, []);

  const handleChange = (lang: string) => {
    localStorage.setItem("selected-language", lang);
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = LANGUAGES.find((l) => l.code === currentLang);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "py-1",
          "flex ",
          "gap-1",
          "px-2 ",
          "border ",
          "bg-white ",
          "text-black ",
          "items-center",
          "rounded-full",
          "cursor-pointer",
          "border-gray-300"
        )}
      >
        <span className="text-lg">{activeLang?.flag}</span>
        <ChevronDown
          size={16}
          className={cn(
            "duration-300",
            open && "rotate-360",
            "transition-transform"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "z-10",
            "mt-2",
            "shadow",
            "right-0",
            "absolute",
            "rounded ",
            "bg-white "
          )}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={cn(
                "flex ",
                "gap-2",
                "px-3 ",
                "py-2 ",
                "w-full",
                "items-center",
                "cursor-pointer",
                "hover:bg-gray-100",
                "text-main-dark-text"
              )}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
