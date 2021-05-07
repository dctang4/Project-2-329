import { useEffect, useState } from "react";
// import Router from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.scss";

function App() {
  // heroesData is the array that will be altered for display
  const [heroesData, setHeroesData] = useState(null);
  // heroesArr holds the original array as a backup
  const [heroesArr, setHeroesArr] = useState(null);

  // api call
  const getData = async () => {
    let tempArr = [];
    // since the api doesn't return all characters at once a loop is needed
    // loop over the pages of the api and add to tempArr
    for (let i = 1; i < 17; i++) {
      const response = await fetch(
        `https://myheroacademiaapi.com/api/character?page=${i}`
      );
      const data = await response.json();

      tempArr.push(...data.result);
    }
    // filter out characters that doesn't have a name so blanks won't be displayed later
    tempArr = tempArr.filter((char) => char.name !== null)

    setHeroesArr(tempArr);
    setHeroesData(tempArr);
  };

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