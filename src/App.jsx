import { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import DragonBallForm from './components/DragonBallForm';
import Favorites from './components/Favorites'
import NavBar from './components/NavBar';



const App =  () => {
  

 

  return (
    <div>
    <NavBar />
    <Switch>
      
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/form">
        <DragonBallForm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      
    </Switch>
      
    </div>
  )
}

export default App
