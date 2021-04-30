import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import "./App.css";

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
    tempArr = tempArr.filter((char) => char.quirk !== null)
    tempArr = tempArr.filter((char) => char.quirk !== "Unknown Quirk")
    // tempArr = tempArr.filter((char) => char.fightstyle !== null)
    setHeroesData(tempArr);

    // const response1 = await fetch(
    //   `https://myheroacademiaapi.com/api/character?page=1`);
    // const data1 = await response1.json();

    // const response2 = await fetch(
    //   `https://myheroacademiaapi.com/api/character?page=2`);
    // const data2 = await response2.json();

    // const response3 = await fetch(
    //   `https://myheroacademiaapi.com/api/character?page=3`);
    // const data3 = await response3.json();

    // setHeroesData([...data1.result, ...data2.result, ... data3.result])
  };

  console.log(heroesData);
  useEffect(() => {
    getData();
  }, []);

  // if (heroesData.length === 20*page) {
  //   page++;

  // }

  // page++;

  // response = await fetch(url(page));
  // data = await response.json();

  // setHeroesData([...heroesData, ...data.result])

  // for (let i = 2; i <= 16; i++) {
  //   const url = `https://myheroacademiaapi.com/api/character?page=${i}`;

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   setHeroesData([...heroesData, ...data.result])
  // }

  // console.log(...heroesData)

  // const getData2 = async () => {
  //   for (let i = 2; i <= 16; i++) {
  //     const url = `https://myheroacademiaapi.com/api/character?page=${i}`;

  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setHeroesData([...heroesData, ...data.result])
  //   }
  // }

  // useEffect(() => {getData2()}, [])
  // console.log(heroesData)

  // const loaded = () => {
  //   return (
  //     <div className="App">
  //       <h1>App component</h1>
  //     </div>
  //   );
  // };

  // const loading = () => {
  //   return <div>Loading...</div>;
  // };

  // return heroesData ? loaded() : loading();

  return (
    <div className="App">
      <h1>App component</h1>
    </div>
  );
}

export default App;
