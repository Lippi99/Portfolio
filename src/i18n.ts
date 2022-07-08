import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import common_pt from "./translations/pt.json";
import common_en from "./translations/en.json";

const resources = {
  en: {
    translation: common_en
  },
  pt: {
    translation: common_pt
  }
}

i18n
.use(initReactI18next)
.init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false, 
  }
});

export default i18n;
