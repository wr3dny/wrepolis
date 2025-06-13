import { SeriesSelect } from "../../pages/Lego/SeriesSelect/SeriesSelect";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SeriesSelect />
    </div>
  );
};
