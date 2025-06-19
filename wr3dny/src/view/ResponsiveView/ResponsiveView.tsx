import { ReactNode } from "react";
import styles from "./ResponsiveView.module.css";

interface Props {
  navbar: ReactNode;
  content: ReactNode;
}

export const ResponsiveView = ({ navbar, content }: Props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.conteiner}>{content}</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
