import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      wishlist: "Wishlist",
      price: "Price",
    },
  },
  pl: {
    translation: {
      wishlist: "Lista życzeń",
      price: "Cena",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
