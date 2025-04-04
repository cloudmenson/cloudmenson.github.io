import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./translations/en";
import { uk } from "./translations/uk";

const resources = {
  en: { translation: en },
  uk: { translation: uk },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
