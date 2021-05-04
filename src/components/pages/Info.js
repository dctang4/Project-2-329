import React, {useEffect, useState} from "react";

const Info = ({match, handleAdd}) => {
  const [heroData, setHeroData] = useState(null)

  const getData = async () => {
    const response = await fetch(
      `https://myheroacademiaapi.com/api/character/${match.params.character}`
    );

    const data = await response.json();
    console.log("info", data)
    setHeroData(data)
  }

  useEffect(() => {getData()}, [])


  const loaded = () => {
    const alias = () => {
      if (heroData.alias === null) {
        return heroData.name
      } else {
        return heroData.alias
      }
    }
    const image = () => {
      if (heroData.images !== null) {
        return heroData.images[0]
      } else {
        return ""
      }
    }
    return (
      <div className="hero-info">
        <h1 className={heroData.name}>
          {heroData.name}
        </h1>
        <img
          src={image()}
          alt={heroData.name}
        />
        <div className="character-info">
          <h4>Alias: <span>{alias()}</span></h4>
          <h4>Quirk: <span>{heroData.quirk}</span></h4>
          <h4>Occupation: <span>{heroData.occupation}</span></h4>
          <h4>Description: <span>{heroData.description}</span></h4>
          <button
            onClick={() => handleAdd(heroData)}
          >
            Add to Fave
          </button>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>loading...</h1>
  }

  return heroData ? loaded() : loading()
};

export default Info;