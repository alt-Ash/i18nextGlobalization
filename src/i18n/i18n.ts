import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locals/en-EN/translation.json'
import translationNL from './locals/nl-NL/translation.json'

i18next.use(initReactI18next).init({
  lng: 'nl',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translations: translationEN,
    },
    nl: {
      translations: translationNL,
    },
  },
})

export { i18next }
