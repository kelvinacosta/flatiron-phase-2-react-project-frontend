import React from "react";
import Card from "./Card";

const ListingCards = ({characters,addDragonCard,addFavorites,deleteFavorite,deleteCardId}) => {
    
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