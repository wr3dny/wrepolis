import styles from "./Lego.module.css";
import { useListOrganizer } from "./useListOrganizer";

export const Lego = () => {
  const { sortedLegoWishlist } = useListOrganizer();

  return (
    <div className={styles.container}>
      {sortedLegoWishlist.map((set, index) => (
        <div key={index}>
          <a
            href={set.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img
              src={set.image}
              alt={set.setNumber.toString()}
              className={styles.img}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
