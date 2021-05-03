import React, {useState} from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Info from "./pages/Info"
import FaveHeroes from "./pages/FaveHeroes"
import MyAlias from "./pages/MyAlias"


const Main = ({heroesData}) => {
  const [heroData, setHeroData] = useState(null)

  const handleClick = (data) => {
    setHeroData(data)
  }

  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/heroes">
          <Heroes 
            heroesData={heroesData}
            handleClick={handleClick}
          />
        </Route>
        <Route 
          path="/heroes/:character"
          render={(routerProps) =>
            <Info 
              {...routerProps}
              heroData={heroData}
            />
          }
        />
        <Route path="/faveheroes">
          <FaveHeroes/>
        </Route>
        <Route path="/myalias">
          <MyAlias/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main