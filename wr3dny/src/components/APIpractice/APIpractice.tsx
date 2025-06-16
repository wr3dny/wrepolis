import { useEffect, useState } from "react";

// type Category = {
//   name: string;
// };

// export const APIpractice = () => {
//   const [rawData, setRawData] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [category, setCategory] = useState<Category[]>([]);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const res = await fetch("https://swapi.py4e.com/api/");
//         const data = await res.json();
//         setRawData(data);
//         const cat = Object.keys(rawData).map(([name]) => [name]);
//         setCategory(cat);

//         console.log("🔍 Cały response JSON z serwera:", data);
//       } catch (error) {
//         console.error("❌ Błąd:", error);
//         setError("Błąd pobierania danych.");
//       }
//     };

//     fetchCharacters();
//   }, []);

//   console.log(category);

//   return (
//     <div>
//       <h2>Characters of Star Wars</h2>
//       {error && <p>{error}</p>}
//       <pre style={{ background: "#eee", padding: "1rem" }}>
//         {rawData ? JSON.stringify(rawData, null, 2) : "Ładowanie..."}
//       </pre>
//     </div>
//   );
// };

export const APIpractice = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const url = "https://corsproxy.io/?https://aos-api.up.railway.app/api/units";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
        console.log("Answear from API:", json);
      } catch (e: any) {
        setError(e.message);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <h2>Odpowiedź z API:</h2>
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      <pre style={{ background: "#eee", padding: "1rem", overflowX: "auto" }}>
        {data ? JSON.stringify(data, null, 2) : "Ładowanie..."}
      </pre>
    </div>
  );
};
