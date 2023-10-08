import React from "react";
import Card from "./Card";

const ListingCards = ({characters,addDragonCard,addFavorites,deleteFavorite}) => {
    
    const listOfCards = characters.map(character => <Card 
        key={character.id} 
        character={character} 
        addCard={addDragonCard} 
        addFavorites={addFavorites}
        deleteFavorite={deleteFavorite}
        />)
    
    return (
    <div className="cards">
        {listOfCards}
        </div>
    )
}



export default ListingCards;