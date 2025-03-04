export const DivGrid = () => {
  const numbersArray = ["one", "two", "three"];

  return (
    <div className="container">
      {numbersArray.map((number) => (
        <div>{number}</div>
      ))}
    </div>
  );
};
