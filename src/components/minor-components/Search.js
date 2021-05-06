import React, {useState} from "react"

const Search = ({handleSubmit}) => {
  const [mySearch, setMySearch] = useState(null)

  const handleChange = (event) => {
    setMySearch(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    handleSubmit(mySearch)
  }

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="search by name"
        value={mySearch}
        onChange={handleChange}
        alt="search input"
      />
      <input type="submit" alt="submit"/>
    </form>
  )

}

export default Search