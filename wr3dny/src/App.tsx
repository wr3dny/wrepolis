import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { RouterConfig } from "./router";

export const App = () => {
  return (
    <div>
      <Navbar />
      <RouterConfig />
    </div>
  );
};
