import antdEnUS from 'antd/es/locale/en_US';
import antdFrUS from 'antd/es/locale/fr_FR';

import en from './locales/en_US.json';
import fr from './locales/fr_FR.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { THEME_CONFIG } from 'configs/AppConfig';
import { LANG_KEY } from 'constants/ThemeConstant';

export const resources = {
  en: {
    translation: en,
    antd: antdEnUS,
  },
  
  fr: {
    translation: fr,
    antd: antdFrUS,
  },
};
const detectorOptions = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: LANG_KEY,
  lookupLocalStorage: LANG_KEY,
  lookuplocalStorage: LANG_KEY,
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  htmlTag: document.documentElement,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: detectorOptions,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
