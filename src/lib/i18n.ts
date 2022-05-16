import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "locale/en";
import ko from "locale/ko";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};
i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "ko",
});
export default i18n;
