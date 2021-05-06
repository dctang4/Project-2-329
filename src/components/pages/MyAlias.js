import React, {useState} from "react"
import Options from "../functions/Options"

const MyAlias = ({heroesArr}) => {
  const [myQuirk, setMyQuirk] = useState("")
  // const [aliasObj, setAliasObj] = useState({color: "", stat: "", side: ""})

  const loaded = () => {
    const tempArr = heroesArr.filter((char) => char.quirk !== null);

    let quirks = [];
    for (let char of tempArr) {
      quirks.push(...char.quirk.split(", "))
    }
    quirks = quirks.filter((quirk) => {
      return (quirk.includes("[") === false && quirk.includes("Quirk") === false && quirk.includes("Unknown") === false)})
    // console.log("quirks ", quirks)
    
    const handleQuirk = () => {
      const randNum = Math.floor(Math.random()*quirks.length);
      setMyQuirk(quirks[randNum]);
      console.log("myQuirk", myQuirk)
    }

    const colors = ["black", "white", "red", "orange", "yellow", "green", "blue", "purple"]

    const stats = ["strength", "defense", "speed", "stamina"]

    const sides = ["villian", "hero"]

    return (
      <div className="my-alias-quirk">
        <h1>My Alias/Quirk</h1>
        <form className="alias-form">
          <label>
            <h3>Pick a color: </h3>
            <select 
              className="color"

            >
              
              {Options(colors)}
            </select>
          </label>
          <label>
            <h3>Pick a stat: </h3>
            <select 
              className="stat"

            >
              {Options(stats)}
            </select>
          </label>
          <label>
            <h3>Pick a side: </h3>
            <select 
              className="side"

            >
              {Options(sides)}
            </select>
          </label>
          <input type="submit" value="submit"/>
        </form>
        <h2>My Alias: <span></span></h2>
        
        <button onClick={handleQuirk}>Random Quirk</button>
        <h2>My Quirk: <span>{myQuirk}</span></h2>
      </div>
    )
  }

  const loading = () => {
    return <h1>loading...</h1>
  }

  return heroesArr ? loaded() : loading()
}

export default MyAlias