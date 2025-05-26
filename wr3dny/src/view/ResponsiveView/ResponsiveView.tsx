import styles from "./ResponsiveView.module.css";

export const ResponsiveView = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.navbar}>Navbar</div>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.conteiner}>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
