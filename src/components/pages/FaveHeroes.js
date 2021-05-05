import React from "react"
import Media from 'react-media';

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
        <Media queries={{
          small: "(max-width: 659px)",
          medium: "(min-width: 660px)"
        }}>
          {matches => (
            <>
              {matches.small && <h1>Favorites</h1>}
              {matches.medium && <h1>Favorites Heroes/Villains</h1>}
            </>
          )}
        </Media>
        
        <div className="card-container">
          {faveHeroes}
        </div>
        
      </div>
    )
  }
  
  return faveArr ? loaded() : <div></div>
  
  
  
}

export default FaveHeroes