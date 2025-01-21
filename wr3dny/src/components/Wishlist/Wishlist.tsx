
const items = [
  { price: 1999, img: "url1", link: "link1", alt: "Gringot" },
  { price: 444, img: "url2", link: "link2", alt: "budka" },
];

export const Wishlist =() => {
  const sortedItems = items.sort((a, b) => a.price - b.price);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "2px",
      }}
    >
      {sortedItems.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f2f2f2",
            padding: "2px",
            textAlign: "center",
          }}
        >
          <a href={item.link} target="_self">
            <img src={item.img} alt={item.alt} style={{ width: "100%" }} />
          </a>
        </div>
      ))}
    </div>
  );
}
