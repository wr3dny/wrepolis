import { WorkItem } from "../../../../const/ceevee";
import styles from "./WorkTimeLine.module.css";

export const workTimeLine = (data: WorkItem) => {
  return (
    <div key={data.id} className={styles.timelineItem}>
      <div>
        {data.from} - {data.to}
      </div>
      <div>
        <div>
          <div>{data.company}</div>
          <div>{data.position}</div>
        </div>

        <div>{data.description}</div>
      </div>
    </div>
  );
};
