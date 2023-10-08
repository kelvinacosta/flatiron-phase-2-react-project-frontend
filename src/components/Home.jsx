import React from "react";
import ListingCards from "./ListingCards";


const Home = ({characters,setCharacters,addDragonCard,addFavorites,deleteCardId}) => {
    
    //Handles the add to favorite by using a call Back
    const handleAddingCard = (newCard) => {
        const updatedCharacters = [...characters, newCard];
        setCharacters(updatedCharacters);
        addDragonCard(newCard); // Pass the new card to addCard
      };
      

    return (
        <div>
        <header>
        <h1>Dragon Ball Cards</h1>
        </header>
        <main>
        <ListingCards characters={characters} addDragonCard={handleAddingCard}  addFavorites={addFavorites} deleteCardId={deleteCardId} />  
        </main>
        
        
        </div>
    )
}

export default Home;