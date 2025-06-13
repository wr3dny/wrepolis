import { Route, Routes } from "react-router-dom";
import { PATHS } from "./const/paths";

import { Lego } from "./pages/Lego/Lego";
import { ResponsiveView } from "./view/ResponsiveView/ResponsiveView";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path={PATHS.HOME}
        element={<ResponsiveView content={<Home />} navbar={<Navbar />} />}
      />
      <Route
        path={PATHS.LEGO}
        element={
          <ResponsiveView
            content={<Lego />}
            navbar={<Navbar />}
            sidebar={<Sidebar />}
          />
        }
      />
    </Routes>
  );
};
