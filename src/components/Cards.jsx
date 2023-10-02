import React from "react";

const Card = ({character}) => {
    
    const {id,name,avatar} = character
    
    return(
        <li className="cards">
            <div className="cardDragon">
                <img src={avatar} alt={name}/>
            </div>
        </li>
    )
}

export default Card;