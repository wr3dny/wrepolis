import { Route, Routes } from "react-router-dom"
import { PATHS } from "./const/paths"
import { Home } from "./pages/Home/Home"
import { Lego } from "./pages/Lego/Lego"
import { Gallery } from "./pages/Gallery/Gallery"
import { NotFound } from "./components/NotFound/NotFound"

export const RouterConfig = () => {
    return (
            <Routes>
                <Route path={PATHS.HOME} element={<Home/>}/>
                <Route path={PATHS.LEGO} element={<Lego/>}/>
                <Route path={PATHS.GALLERY} element={<Gallery/>}/>       
                <Route path="*" element={<NotFound />} />      
            </Routes>
    )
}