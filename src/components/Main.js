import React, {useState} from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Info from "./pages/Info"
import FaveHeroes from "./pages/FaveHeroes"
import MyAlias from "./pages/MyAlias"


const Main = ({heroesData, handleClick, heroesArr}) => {
  const [faveArr, setFaveArr] = useState([])

  const handleAdd = (hero) => {
    setFaveArr([...faveArr, hero])
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
            heroesArr={heroesArr}
          />
        </Route>
        <Route 
          path="/heroes/:character"
          render={(routerProps) =>
            <Info 
              {...routerProps}
              handleAdd={handleAdd}
            />}
        />
        <Route path="/faveheroes">
          <FaveHeroes faveArr={faveArr}/>
        </Route>
        <Route path="/myalias">
          <MyAlias/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main