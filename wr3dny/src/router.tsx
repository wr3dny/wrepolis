import { Route, Routes } from "react-router-dom";
import { PATHS } from "./const/paths";

import { Lego } from "./pages/Lego/Lego";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Gallery } from "./pages/Gallery/Gallery";
import { Coins } from "./pages/Coins/Coins";

export const RouterConfig = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.COINS} element={<Coins />} />
        <Route path={PATHS.GALLERY} element={<Gallery />} />
        <Route path={PATHS.LEGO} element={<Lego />} />
      </Routes>
    </>
  );
};
