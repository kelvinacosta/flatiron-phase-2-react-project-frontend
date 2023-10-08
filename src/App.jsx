import { useState,useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import DragonBallForm from './components/DragonBallForm';
import Favorites from './components/Favorites'
import NavBar from './components/NavBar';




const App =  () => {

  //Set useState to hold the list of characters
  const [characters, setCharacters] = useState([]);
  
  const [favorites, setFavorites] = useState([]);
 
  //Use effect to GET data from the api
  useEffect(()=>{
      fetch("https://backend-phase-2-project-0zsy.onrender.com/characters")
      .then(response=>response.json())
      .then(data=>setCharacters(data))
      .catch(err=>console.error("Error getting Cards!",err))
  },[])

  //Handles changes in the App Parent component such as addingCard favorite , deleteItem Favorite and Delete Method
  const addDragonCard = (newCard) => {
    setCharacters([...characters, newCard]);
  };

  const addFavorites = (favorite) => {
    setFavorites([...favorites,favorite])
  }

  const deletingFavorites = (itemToDelete) => {
    const updatedFavorites = favorites.filter(character => character.id !== itemToDelete )
    setFavorites(updatedFavorites);
  }

  const removeId = (cardToDelete) =>{
    const updateDeleteItems = characters.filter(character => character.id !== cardToDelete)

    setCharacters(updateDeleteItems)
  }

  return (
    //Renders all the Parent components using swicth and routes
    <div className="app-container">
    <NavBar characters={characters} setCharacters={setCharacters}/>
    <Switch>
      
      <Route path="/favorites">
        <Favorites favorites={favorites} addFavorites={addFavorites} deleteFavorite={deletingFavorites}/>
      </Route>
      <Route path="/form">
        <DragonBallForm addDragonCard={addDragonCard}/>
      </Route>
      <Route exact path="/">
        <Home characters={characters} setCharacters={setCharacters} addFavorites={addFavorites} deleteCardId={removeId}/>
      </Route>
      
    </Switch>
      
    </div>
  )
}

export default App
