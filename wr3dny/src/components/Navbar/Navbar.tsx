import { NavLink } from "react-router-dom";
import { PATHS } from "../../const/paths";

export const Navbar = () => {
  return (
    <nav>
      <div>
        {Object.entries(PATHS).map(([key, value]) => (
          <div key={key}>
            <NavLink to={value} end>
              {key}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};