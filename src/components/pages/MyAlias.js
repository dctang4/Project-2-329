import React, {useState} from "react"
import Options from "../functions/Options"
import aliasData from "../../aliasData"

const MyAlias = ({heroesArr}) => {
  const [myAlais, setMyAlias] = useState("")
  const [myQuirk, setMyQuirk] = useState("")
  const [aliasObj, setAliasObj] = useState({color: "black", stat: "strength", side: "villian"})

  const loaded = () => {
    const tempArr = heroesArr.filter((char) => char.quirk !== null);

    let quirks = [];
    for (let char of tempArr) {
      quirks.push(...char.quirk.split(", "))
    }
    quirks = quirks.filter((quirk) => {
      return (quirk.includes("[") === false && quirk.includes("Quirk") === false && quirk.includes("Unknown") === false)
    })
    
    const randNum = (arr) => {
      return (Math.floor(Math.random()*arr.length))
    }
    
    const handleQuirk = () => {
      setMyQuirk(quirks[randNum(quirks)]);
    }

    const handleChange = (event) => {
      const name = event.target.name;
      setAliasObj({
        ...aliasObj,
        [name]: event.target.value
      })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const alias = () => {
        const colorArr = aliasData.color[aliasObj.color]
        const statArr = aliasData.stat[aliasObj.stat]
        const sideArr = aliasData.side[aliasObj.side]
        if (Math.random()*10 > 5) {
          return (
            `${colorArr[randNum(colorArr)]} ${sideArr[randNum(sideArr)]} ${statArr[randNum(statArr)]}`
          )
        } else {
          return (
            `${colorArr[randNum(colorArr)]} ${statArr[randNum(statArr)]}`
          )
        }
      }
      setMyAlias(alias())
    }

    const colors = ["black", "white", "red", "orange", "yellow", "green", "blue", "purple"]
    const stats = ["strength", "defense", "speed", "stamina"]
    const sides = ["villian", "hero"]

    return (
      <div className="my-alias-quirk">
        <h1>My Alias/Quirk</h1>
        <form 
          className="alias-form"
          onSubmit={handleSubmit}
        >
          <label>
            <h3>Pick a color: </h3>
            <select 
              name="color"
              value={aliasObj.color}
              onChange={handleChange}
            >
              {Options(colors)}
            </select>
          </label>
          <label>
            <h3>Pick a stat: </h3>
            <select 
              name="stat"
              value={aliasObj.stat}
              onChange={handleChange}
            >
              {Options(stats)}
            </select>
          </label>
          <label>
            <h3>Pick a side: </h3>
            <select 
              name="side"
              value={aliasObj.side}
              onChange={handleChange}
            >
              {Options(sides)}
            </select>
          </label>
          <input type="submit" value="submit"/>
        </form>
        <h2>My Alias: <span>{myAlais}</span></h2>
        
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