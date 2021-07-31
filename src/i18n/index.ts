import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import vi from './vi.I18n';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {vi, ar: {}},
    lng: 'vi',
    fallbackLng: 'vi',
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
