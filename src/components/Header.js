import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {
  // nav bar with links to different pages
  return (
    <div className="nav">
      <div className="icon-image">
        <Link to="/heroes">
          <img 
            className="icon" 
            src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1620061066/Project%202/icon1_edj2mm.png" 
            alt="icon"
          />
          <p>Heroes</p>
        </Link>
      </div>
      <div className="MyHero-logo">
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1620052647/Project%202/MyHeroAcademialogo_mxqqjc.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/faveheroes">
          <p>Fave</p>
        </Link>
        <Link to="/myalias">
          <p>Alias</p>
        </Link>
      </div>
    </div>
  )
}

export default Header