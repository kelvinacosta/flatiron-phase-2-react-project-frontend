import React from "react";


const Card = ({character,addFavorites,deleteCardId}) => {
    
    const {id,name,avatar} = character

    const handleFavorite = () => {
        addFavorites(character)
    }

    const handleDelete = () =>{
        // deleteCardId(itemId)
        //Delete Id from database
        fetch(`https://backend-phase-2-project-0zsy.onrender.com/characters/${id}`,{
            method: "DELETE",
        })
        .then(response => response.json())
        .then(()=>deleteCardId(id))
        .catch(err=> console.error("Error Deleting Card",err))
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
                <button onClick={()=>handleDelete(character.id)}>🗑️</button>
            </div>    

        </div>
        
        
    )
}

export default Card;