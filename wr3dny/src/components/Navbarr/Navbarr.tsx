import { NavLink } from "react-router-dom";
import { PATHS } from "../../const/paths";
import styles from "./Navbarr.module.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

// interface Ripple {
//   x: number;
//   y: number;
//   size: number;
// }

export const Navbarr = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  // const [ripple, setRipple] = useState<Ripple | null>(null);

  // useEffect(() => {
  //   document.body.classList.toggle(styles.darkMode, darkMode);
  // }, [darkMode]);

  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   const button = e.currentTarget;
  //   const rect = button.getBoundingClientRect();
  //   const rippleSize = Math.max(rect.width, rect.height);
  //   const x = e.clientX - rect.left - rippleSize / 2;
  //   const y = e.clientY - rect.top - rippleSize / 2;

  //   setRipple({ x, y, size: rippleSize });

  //   setTimeout(() => setRipple(null), 600);
  // };
  return (
    <>
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 🔥 Dark Mode Toggle */}
      {/* <button className={styles.darkModeToggle} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button> */}

      <nav className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <ul>
          {Object.entries(PATHS).map(([key, value]) => (
            <li key={key}>
              <NavLink
                to={value}
                end
                className={styles.link}
                onClick={() => setSidebarOpen(false)}
              >
                {key}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* <nav className={styles.navbar}>
      <ul>
        {Object.entries(PATHS).map(([key, value]) => (
          <li key={key}>
            <NavLink to={value} end className={styles.link} onClick={handleClick}>
              {key}
              {ripple && (
                <span
                  className={styles.ripple}
                  style={{
                    top: ripple.y,
                    left: ripple.x,
                    width: ripple.size,
                    height: ripple.size
                  }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav> */}
    </>
  );
};
