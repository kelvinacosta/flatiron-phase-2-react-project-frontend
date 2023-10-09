import React,{useState} from "react";

const SearchBar = ({onSearchDragonCards}) => {
    
    const [searchCard,setSearchCard] = useState("")
    //Handles Change and create a call back to call the value for the dragon ball cards.
    const handleChange = (e) =>{
        const cardText = e.target.value;
        setSearchCard(cardText)
        onSearchDragonCards(cardText)
    }

    return (

        <div className="barInput">
            <input type="text" 
            placeholder="Type a name...." 
            onChange={handleChange}
            value={searchCard}//using controlled values.
            />
        </div>
    )
}

export default SearchBar;