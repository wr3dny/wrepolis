import { useState } from 'react'

import './App.css'
import { useTranslation } from 'react-i18next'
import { Wishlist } from './components/Wishlist/Wishlist'

export const App = () => {
const {t, i18n} = useTranslation()

const switchLanguage = (lang: string | undefined) => {
  i18n.changeLanguage(lang)
}

  return (
    <div>
      <h3>{t('wishlist')}</h3>
      <button onClick={() => switchLanguage("en")}>ENG</button>
      <button onClick={() => switchLanguage("pl")}>PL</button>
      <Wishlist/>
    </div>
  )
}

