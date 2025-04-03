// "use client";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import { uk as ukTranslation } from "@/app/i18n/translations/uk";
// import { en as enTranslation } from "@/app/i18n/translations/en";

// export const defaultLang = "en";
// const currentLang =
//   typeof window !== "undefined"
//     ? localStorage.getItem("selected-language") || defaultLang
//     : defaultLang;

// const resources = {
//   en: {
//     translation: enTranslation,
//   },
//   uk: {
//     translation: ukTranslation,
//   },
// };

// if (typeof window !== "undefined") {
//   i18n.use(initReactI18next).init({
//     lng: currentLang,
//     fallbackLng: currentLang,
//     resources,
//     interpolation: {
//       escapeValue: false,
//       prefix: "{{",
//       suffix: "}}",
//     },
//   });
// }

// export default i18n;
