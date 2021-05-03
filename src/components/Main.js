import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Info from "./pages/Info"
import FaveHeroes from "./pages/FaveHeroes"
import MyAlias from "./pages/MyAlias"


const Main = ({herosData}) => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact pat="/Heroes">
          <Heroes herosData={herosData}/>
        </Route>
        <Route path="/Heroes/:character"
          render={(routerProps) =>
          <Info {...routerProps}
          herosData={herosData}/>}
        />
        <Route path="./FaveHeroes">
          <FaveHeroes/>
        </Route>
        <Route path="./MyAlias">
          <MyAlias/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main