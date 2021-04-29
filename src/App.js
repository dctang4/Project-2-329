import {useEffect, useState} from "react"
import Router from "react-router-dom"
import './App.css';

function App() {

  // const [heroesData, setHeroesData] = useState(null)



  // const getData = async () => {
    
  //   const url = "https://myheroacademiaapi.com/api/character";

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   setHeroesData(data.result)
    

    // for (let i = 2; i <= 16; i++) {
    //   const url = `https://myheroacademiaapi.com/api/character?page=${i}`;

    //   const response = await fetch(url);
    //   const data = await response.json();

    //   setHeroesData([...heroesData, ...data.result])
    // }
  // }
  // useEffect(() => {getData()}, [])
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


  return (
    <div className="App">
      <h1>App component</h1>
    </div>
  );
}

export default App;
