import React, {useState} from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Info from "./pages/Info"
import FaveHeroes from "./pages/FaveHeroes"
import MyAlias from "./pages/MyAlias"


const Main = ({heroesData, handleClick, heroesArr}) => {

  const [faveArr, setFaveArr] = useState([])

  const noRepeatFnc = (objArr, newObj) => {
    let noRepeat = true;
    for (let obj of objArr) {
      if (obj.id === newObj.id) {
        noRepeat = false;
        return noRepeat
      }
    }
    return noRepeat
  }

  const handleAdd = (hero) => {
    if(faveArr === []) {
      setFaveArr([hero])
    } else if (noRepeatFnc(faveArr, hero)) {
      setFaveArr([...faveArr, hero])
    }
    console.log(faveArr)
  }

  const handleRemove = (index) => {
    const newFaveArr = faveArr.filter((fave, i) => i !== index)
    setFaveArr(newFaveArr)
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
          <FaveHeroes 
            faveArr={faveArr}
            handleRemove={handleRemove}
          />
        </Route>
        <Route path="/myalias">
          <MyAlias heroesArr={heroesArr}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main