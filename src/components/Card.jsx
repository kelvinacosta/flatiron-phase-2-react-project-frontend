import React from "react";


const Card = ({character,addFavorites}) => {
    
    const {id,name,avatar} = character

    const handleFavorite = () => {
        addFavorites(character)
    }
    
    return(
        <div>
            <div className="cardDragon">
                <h3>{name}</h3>
                <span>
                <img src={avatar} alt={name}/>
                </span>
    
            </div>
            <div>
                <button className="button-like">{"❤️"}</button>
                <button onClick={handleFavorite}>{"⭐"}</button>
            </div>  
            

        </div>
        
        
    )
}

export default Card;