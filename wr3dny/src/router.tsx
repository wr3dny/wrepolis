import { Route, Routes } from "react-router-dom";
import { PATHS } from "./const/paths";
// import { Home } from "./pages/Home/Home";
import { Lego } from "./pages/Lego/Lego";
import { ResponsiveView } from "./view/ResponsiveView/ResponsiveView";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<ResponsiveView />} />
      <Route path={PATHS.LEGO} element={<Lego />} />
    </Routes>
  );
};
