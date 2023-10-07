import React from "react";

const Favorites = ({ favorites }) => {
  
    

    const favoritesList = favorites.map((character) => (
        <div key={character.id} >
            <div className="cardDragon">
            
            <div>
                <h3>{character.name}</h3>
                <span>
                    <img src={character.avatar} alt={character.name}/>
                </span> 

            </div>
            </div>
            <div>
                <button>🗑️</button>
            </div>
            
        </div>
      ));
      

  return (
     <div >
      <h3>My Favorites Cards</h3>
      <div className="cards">{favoritesList}</div>
    </div>
  );
};

export default Favorites;
