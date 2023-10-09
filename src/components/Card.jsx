import React,{useState, useEffect } from "react";


const Card = ({character,addFavorites,deleteCardId}) => {
    
    //Using a state to inizitale the heart for empty or full heart
    const [isHeart, setIsHeart] = useState(false);
    const [isStar, setIsStar] = useState(
        localStorage.getItem(`favorite_${character.id}`) === "true"
      );
    
    //Destructure character 
    const {id,name,avatar} = character

    useEffect(() => {
        localStorage.setItem(`favorite_${id}`, isStar);
      }, [id, isStar]);
    //Handles to add Favorite Character by using a call back
    const handleFavorite = () => {
        setIsStar(!isStar)
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
    //Creates an event to empty full heart or empty heart
    const handleHeart = () => {
        setIsHeart(!isHeart)
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
                {isHeart ? <button onClick={handleHeart}>{"❤️"}</button> : <button className="button-like" onClick={handleHeart}>{"🤍"}</button>}
                {isStar?<button onClick={handleFavorite}>{"⭐"}</button> : <button onClick={handleFavorite}>{"☆"}</button>}
                <button onClick={()=>handleDelete(character.id)}>🗑️</button>
            </div>    

        </div>
        
        
    )
}

export default Card;