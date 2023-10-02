import React from "react";

const Card = ({character}) => {
    
    const {id,name,avatar} = character
    
    return(
        <div >
            
            <div className="cardDragon">
                <h3>{name}</h3>
                <img src={avatar} alt={name}/>   
            </div>
            
        </div>
        
    )
}

export default Card;