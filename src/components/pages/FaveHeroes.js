import React from "react"

const FaveHeroes = ({faveArr, handleRemove}) => {
  const loaded = () => {
    const faveHeroes = faveArr.map((hero, index) => {
      const alias = () => {
        if (hero.alias === null) {
          return hero.name
        } else {
          return hero.alias
        }
      }

      return (
        <div className="fave-hero" key={index}>
          <h2>{hero.name}</h2>
          <img src={hero.images[0]} alt="hero/villain"/>
          <h4>Alias: <span>{alias()}</span></h4>
          <h4>Quirk: <span>{hero.quirk}</span></h4>
          <h4>Occupation: <span>{hero.occupation}</span></h4>
          <button
            onClick={() => handleRemove(index)}
          >
            Remove
          </button>
        </div>
      )
    })
    return (
      <div className="fave-heroes">
        {faveHeroes}
      </div>
    )
  }
  
  return faveArr ? loaded() : <div></div>
  
  
  
}

export default FaveHeroes