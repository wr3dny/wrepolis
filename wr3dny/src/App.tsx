import { useState } from 'react'

import './App.css'
import { useTranslation } from 'react-i18next'
import { Wishlist } from './components/Wishlist/Wishlist'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Other } from './pages/Other/Other'
import { Lego } from './pages/Lego/Lego'

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
      <h3>{t('wishlist')}</h3>
      <button onClick={() => switchLanguage("en")}>ENG</button>
      <button onClick={() => switchLanguage("pl")}>PL</button>
      <button onClick={toggle}>Night/Day</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
        <Route path="/lego" element={<Lego />} />

      </Routes>
    </div>
  )
}

