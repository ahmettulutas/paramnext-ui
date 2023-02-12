import i18n from "i18next";
import locales from "./locales/index";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    },
    lng: "tr",
    react: {
      wait: false,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    },
    resources: locales
  });


export default i18n;