export const Gallery = () => {
  return (
    <div className={styles.display}>
      {listToDisplay.map((set) => (
        <div key={set.setNumber}>
          <a
            href={set.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img src={set.image} alt={set.alt} className={styles.img} />
          </a>
        </div>
      ))}
    </div>
  );
};
