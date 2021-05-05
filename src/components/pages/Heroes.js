import React from "react"
import {Link} from "react-router-dom"

const Heroes = ({heroesData, handleClick, heroesArr}) => {
  const loaded = () => {
    const sortRevAlph = heroesData.slice().sort((a,b) => {
      if (a.id > b.id) {
        return -1
      } else {
        return 1
      }
    })
    // console.log("heroes - sortRevAlph", sortRevAlph)

    const sortHasQuirk = heroesArr.filter((char) => char.quirk !== null)
    // console.log("heroes - sortHasQuirk", sortHasQuirk)

    const filterOcc = heroesArr.filter((char) => 
      char.occupation !== null)

    const sortVillains = filterOcc.filter((char) => 
      char.occupation.includes("Villain"))
    // console.log("heroes - sortVillains", sortVillains)

    const sortHeroes = filterOcc.filter((char) => 
      char.occupation.includes("Hero"))
    // console.log("heroes - sortHeroes", sortHeroes)

    const sortStudents = filterOcc.filter((char) => 
      char.occupation.includes("Student"))
    // console.log("heroes - sortStudents", sortStudents)

    const heroes = heroesData.map((heroData,index) => {
      return (
        <div className="hero" key={index}>
          <Link to={`/heroes/${heroData.id}`}>
            <p className={heroData.id}>
              {heroData.name}
            </p>
          </Link>
        </div>
      )
    })
    return (
      <div className="heroes">
        <h1>Heroes/Villains</h1>
        <div className="sort">
          <button
            className="sort-full-list"
            onClick={() => handleClick(heroesArr)}
          >
            Full List
          </button>
          <button
            className="sort-reverse-alph"
            onClick={() => handleClick(sortRevAlph)}
          >
            Reverse
          </button>
          <button
            className="sort-has-quirk"
            onClick={() => handleClick(sortHasQuirk)}
          >
            Has Quirk
          </button>
          <button
            className="sort-villians"
            onClick={() => handleClick(sortVillains)}
          >
            Villains
          </button>
          <button
            className="sort-heroes"
            onClick={() => handleClick(sortHeroes)}
          >
            Heroes
          </button>
          <button
            className="sort-students"
            onClick={() => handleClick(sortStudents)}
          >
            Students
          </button>
        </div>
        <div className="heroes-list">
          {heroes}
        </div>
      </div>
    )
  }

  const loading = () => {
    return <h1>loading...</h1>
  }

  return heroesData ? loaded() : loading()
}

export default Heroes