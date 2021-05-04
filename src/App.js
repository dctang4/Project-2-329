import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.scss";

function App() {
  const [heroesData, setHeroesData] = useState(null);
  const [heroesArr, setHeroesArr] = useState(null);

  const getData = async () => {
    let tempArr = [];
    for (let i = 1; i < 17; i++) {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?page=${i}`
      );
      const data = await response.json();

      tempArr.push(...data.result);
    }
    tempArr = tempArr.filter((char) => char.name !== null)

    setHeroesArr(tempArr);
    setHeroesData(tempArr);
  };
  // console.log("app - 1 ", heroesArr)
  // console.log("app - 2 ", heroesData)
  useEffect(() => {getData()}, []);

  const handleClick = (arr) => {
    return setHeroesData(arr)
  }

  return (
    <div className="App">
      <Header/>
      <Main 
        heroesData={heroesData} 
        handleClick={handleClick}
        heroesArr={heroesArr}
      />
      <Footer/>
    </div>
  );
}

export default App;
