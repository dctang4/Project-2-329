import React from "react"

const Options = (arr) => {
  const optionsArr = arr.map((item, index) => {
    return <option 
      value={item} 
      key={index}
      >
        {item[0].toUpperCase()}{item.substr(1)}
      </option>
  })
  return (
    <>
      {optionsArr}
    </>
  )
    
}

export default Options