import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ko from './ko.json';
import jp from './jp.json';

export const resources = {
  'en-US': { translation: en },
  'ko-KR': { translation: ko },
  'ja-JP': { translation: jp },
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en-US',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
