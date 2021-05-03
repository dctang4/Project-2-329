import React from "react"

const Heroes = ({heroesData}) => {
  console.log(heroesData)

  const loaded = () => {
    const heroes = heroesData.map((heroData,index) => {
      return (
        <div className="hero" key={index}>
          <p className={heroData.id}>{heroData.name}</p>
        </div>
      )
    })
    return (
      <div className="heroes">
        <h1>Heroes/Villians</h1>
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