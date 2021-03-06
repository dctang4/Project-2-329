import React from "react"
import {Link} from "react-router-dom"
import Search from "../minor-components/Search"

const Heroes = ({heroesData, handleClick, heroesArr}) => {
  const loaded = () => {
    const sortRevAlph = heroesData.slice().sort((a,b) => {
      if (a.id > b.id) {
        return -1
      } else {
        return 1
      }
    })

    const sortHasQuirk = heroesArr.filter((char) => char.quirk !== null)

    const filterOcc = heroesArr.filter((char) => 
      char.occupation !== null)

    const sortVillains = filterOcc.filter((char) => 
      char.occupation.includes("Villain"))

    const sortHeroes = filterOcc.filter((char) => 
      char.occupation.includes("Hero"))

    const sortStudents = filterOcc.filter((char) => 
      char.occupation.includes("Student"))

    const sortArr = [
      {class: "sort-full-list", sort: heroesArr, text: "Full List"},
      {class: "sort-reverse", sort: sortRevAlph, text: "Reverse"},
      {class: "sort-has-quirk", sort: sortHasQuirk, text: "Has Quirk"},
      {class: "sort-villains", sort: sortVillains, text: "Villains"},
      {class: "sort-heroes", sort: sortHeroes, text: "Heroes"},
      {class: "sort-students", sort: sortStudents, text: "Students"},
    ];

    const sortBtns = sortArr.map((obj, index) => {
      return (
        <button
          className={obj.class}
          onClick={() => handleClick(obj.sort)}
          key={index}
        >
          {obj.text}
        </button>
      )
    })

    const heroes = heroesData.map((heroData,index) => {
      return (
        <div className="hero" id={index} key={index}>
          <Link to={`/heroes/${heroData.id}`}>
            <p className={heroData.id}>
              {heroData.name}
            </p>
          </Link>
        </div>
      )
    })

    const handleSubmit = (input) => {
      const search = input.toLowerCase();
      const newHeroesArr = heroesArr.filter((hero) => {
        return (
          hero.name.toLowerCase().split(" ").includes(search) ||
          hero.name.toLowerCase() === search || (
          hero.name.toLowerCase()[0] === search && search.length === 1
          )
        )
      })
      handleClick(newHeroesArr)
    }

    return (
      <div className="heroes">
        <h1>Heroes/Villains</h1>
        <div className="sort">
          {sortBtns}
        </div>
        <Search handleSubmit={handleSubmit}/>
        <div className="heroes-list">
          {heroes}
          <a href="#0" className="back-to-top">Back to Top</a>
        </div>
      </div>
    )
  }

  const loading = () => {
    return <div className="heroes"><h1>loading...</h1></div>
  }

  return heroesData ? loaded() : loading()
}

export default Heroes