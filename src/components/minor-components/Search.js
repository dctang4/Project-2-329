import React, {useState} from "react"

const Search = ({handleSubmit}) => {
  const [mySearch, setMySearch] = useState("")

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
        className="search-input"
        placeholder="search by name"
        value={mySearch}
        onChange={handleChange}
        alt="search input"
      />
      <input 
        type="submit" 
        className="submit-input"
        alt="submit"
      />
    </form>
  )

}

export default Search