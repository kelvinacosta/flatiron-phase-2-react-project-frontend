import React from "react";

const Card = ({character}) => {
    
    const {id,name,avatar} = character
    
    return(
        <li>
            <div>
                <img src={avatar} alt={name}/>
            </div>
        </li>
    )
}

export default Card;