export const Map = () => {
  const arrayData = ["one", "two", "three", "four", "five", "six"];

  const objectData = {
    first: { name: "John", age: 35 },
    second: { name: "Alex", age: 28 },
    third: { name: "Ulfer", age: 995 },
    fourth: { name: "Olmo", age: 94 },
    fifth: { name: "Thir", age: 55 },
    sixsth: { name: "Greg", age: 18 },
  };

  return (
    <div>
      <div>
        {arrayData.map((val) => (
          <div>{val}</div>
        ))}
      </div>
      <div>
        {Object.entries(objectData).map(([k, v]) => (
          <div key={k}>
            <div>{k}</div>
            <div>
              {v.name}, age: {v.age}
            </div>
          </div>
        ))}
      </div>
      <div>Map3</div>
    </div>
  );
};
