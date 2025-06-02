import { ReactNode } from "react";
import styles from "./ResponsiveView.module.css";

interface Props {
  navbar?: ReactNode;
  sidebar?: ReactNode;
  content: ReactNode;
}

export const ResponsiveView = ({ navbar, sidebar, content }: Props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.conteiner}>{content}</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
