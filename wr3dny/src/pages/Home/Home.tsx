import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <button>Order</button>
      <button>Chaos</button>
    </div>
  );
};
