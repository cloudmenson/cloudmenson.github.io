export type LanguageOption = {
  icon: string;
  value: string;
  label: string;
};

export type LanguageConfig = {
  [key: string]: LanguageOption;
};

export const languageConfig: LanguageConfig = {
  en: {
    icon: "🇬🇧",
    value: "en",
    label: "English",
  },
  uk: {
    icon: "🇺🇦",
    value: "uk",
    label: "Українська",
  },
};
