import React,{useState,useEffect} from "react";
import ListingCards from "./ListingCards";


const Home = () => {
    
    const [characters,setCharacters] = useState([]);

    useEffect(()=>{
        fetch("https://backend-phase-2-project-0zsy.onrender.com/characters")
        .then(response=>response.json())
        .then(data=>setCharacters(data))
        .catch(err=>console.error("Error getting Cards!",err))
    },[])
    
    return (
        <div>
        <header>
        <h1>My Home App</h1>
        </header>
        <ListingCards characters={characters}/>
        
        </div>
    )
}

export default Home;