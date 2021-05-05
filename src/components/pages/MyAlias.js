import React from "react"

const MyAlias = ({heroesArr}) => {

  const loaded = () => {
    console.log("MyAlias ", heroesArr)
    const tempArr = heroesArr.filter((char) => char.quirk !== null);
    console.log("tempArr", tempArr)
    


    return <h1>Create Alias/Quirk</h1>
  }

  const loading = () => {
    return <h1>loading...</h1>
  }

  return heroesArr ? loaded() : loading()
}

export default MyAlias