import { NavLink } from "react-router-dom";
import { PATHS } from "../../const/paths";
import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <div className={styles.topBar}>
        <nav className={styles.navbar}>
          <div className={styles.logoWrap}>
            {/* LOGO */}
            <span className={styles.logo} data-text="NEONNET">
              NEONNET
            </span>
            <span className={styles.badge}>v1.0</span>
          </div>
          {/* desktop links */}
          <ul className={styles.listDesktop}>
            {Object.entries(PATHS).map(([key, value]) => (
              <li key={key}>
                <NavLink
                  to={value}
                  end
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.active : ""].join(" ")
                  }
                >
                  <span className={styles.linkFrame} />
                  <span className={styles.linkCornerTL} />
                  <span className={styles.linkCornerBR} />
                  {key}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile panel */}
        <div
          className={[styles.mobilePanel, open ? styles.open : ""].join(" ")}
        >
          <ul className={styles.listMobile}>
            {Object.entries(PATHS).map(([key, value]) => (
              <li key={key} className={styles.itemMobile}>
                <NavLink
                  to={value}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      styles.mobileLink,
                      isActive ? styles.mobileActive : "",
                    ].join(" ")
                  }
                >
                  {key}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
