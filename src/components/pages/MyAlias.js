import React, {useState} from "react"

const MyAlias = ({heroesArr}) => {
  const [myQuirk, setMyQuirk] = useState("")

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

    return (
      <div className="my-alias-quirk">
        <h1>My Alias/Quirk</h1>
        
        <h2>My Quirk: <span>{myQuirk}</span></h2>
        <button onClick={handleQuirk}>Random Quirk</button>
      </div>
    )
  }

  const loading = () => {
    return <h1>loading...</h1>
  }

  return heroesArr ? loaded() : loading()
}

export default MyAlias