"use-client";

import { DEFAULT_LANG } from "@/app/constants";

const detectBrowserLanguage = () => {
  const browserLang = navigator.languages || [navigator.language || "en"];
  return browserLang.map((code) => code.split("-")[0]);
};

export const getPreferredLanguage = (codes: string[]) => {
  const browserLang = detectBrowserLanguage();
  const localStoreLng = localStorage.getItem("selected-language");

  const matchedLng = browserLang.find((lang) => codes.includes(lang));

  if (localStoreLng && codes.includes(localStoreLng)) {
    return localStoreLng;
  }

  if (browserLang && matchedLng) {
    return matchedLng;
  }

  return DEFAULT_LANG;
};
