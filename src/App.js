import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import "./App.scss";

function App() {
  const [heroesData, setHeroesData] = useState(null);

  const getData = async () => {
    let tempArr = [];
    for (let i = 1; i < 17; i++) {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?page=${i}`
      );
      const data = await response.json();

      tempArr.push(...data.result);
    }
    // tempArr = tempArr.filter((char) => char.quirk !== null)
    // tempArr = tempArr.filter((char) => char.quirk !== "Unknown Quirk")

    setHeroesData(tempArr);
  };

  // console.log(heroesData);
  useEffect(() => {getData();}, []);

  return (
    <div className="App">
      <h1>App component</h1>
    </div>
  );
}

export default App;
