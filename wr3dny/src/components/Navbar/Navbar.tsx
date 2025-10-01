import { NavLink } from "react-router-dom";
import { PATHS } from "../../const/paths";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        {Object.entries(PATHS).map(([key, value]) => (
          <li key={key}>
            <NavLink to={value} end className={styles.to}>
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
