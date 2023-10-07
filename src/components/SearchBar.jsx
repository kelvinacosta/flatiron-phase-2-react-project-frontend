import React,{useState} from "react";

const SearchBar = ({onSearchDragonCards}) => {
    
    const [searchCard,setSearchCard] = useState("")
    
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
            value={searchCard}
            />
        </div>
    )
}

export default SearchBar;