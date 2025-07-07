import { cvText } from "../../const/ceevee";
import styles from "./CeeVee.module.css";
import { workTimeLine } from "./components/WorkTimeLine/WorkTimeLine";

export const CeeVee = () => {
  const { sortedWorkPlaces, name, aboutMe } = cvText();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div />
        <div className={styles.underImg}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.about}>{aboutMe}</div>
        <div>{sortedWorkPlaces.map(workTimeLine)}</div>
        <div>{sortedWorkPlaces.map(workTimeLine)}</div>
        <div>{sortedWorkPlaces.map(workTimeLine)}</div>
      </div>
    </div>
  );
};
