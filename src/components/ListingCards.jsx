import React from "react";
import Card from "./Cards";

const ListingCards = ({characters}) => {
    
    const listOfCards = characters.map(character => <Card key={character.id} character={character}/>)
    
    return (
        <main>
            <ul className="cards">
                {listOfCards}
            </ul>
        </main>
    )
}



export default ListingCards;