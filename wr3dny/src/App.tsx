import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import {  Navbar } from './components/Navbar/Navbar'
import { RouterConfig } from './router'

export const App = () => {
const [isBright,setIsBright] = useState(true)

const {t, i18n} = useTranslation()

const switchLanguage = (lang: string | undefined) => {
  i18n.changeLanguage(lang)
}

const toggle = () => setIsBright(prev => !prev);
console.log(isBright)

  return (
    <div>
      <Navbar/>
      {/* <h3>{t('wishlist')}</h3>
      <button onClick={() => switchLanguage("en")}>ENG</button>
      <button onClick={() => switchLanguage("pl")}>PL</button>
      <button onClick={toggle}>Night/Day</button> */}
      <RouterConfig/>
    </div>
  )
}

