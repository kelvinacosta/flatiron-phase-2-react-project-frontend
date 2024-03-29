import React from "react";
import Card from "./Card";

const ListingCards = ({characters,addDragonCard,addFavorites,deleteFavorite,deleteCardId}) => {
    
    //Creates a variable to map all characters inside the function and then renders Card List
    const listOfCards = characters.map(character => <Card 
        key={character.id} 
        character={character} 
        addCard={addDragonCard} 
        addFavorites={addFavorites}
        deleteFavorite={deleteFavorite}
        deleteCardId={deleteCardId}
        />)
    
    return (
    <div className="cards">
        {listOfCards}
        </div>
    )
}



export default ListingCards;