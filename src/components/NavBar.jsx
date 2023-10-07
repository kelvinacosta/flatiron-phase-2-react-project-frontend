import React,{useState} from "react";
import { NavLink,useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({characters,setCharacters}) => {
    
    // console.log(characters)
    const location = useLocation();
    const isHome = location.pathname === '/';
    
   

    const handleCards = (searchText) => {
        if(searchText===""){
            setCharacters(characters)
        }else{
            const filterCharacters = characters.filter(character=>character.name.toLowerCase().includes(searchText))

            setCharacters(filterCharacters);
        }
      };
    
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/form">
                ➕
            </NavLink>
            <NavLink to="/favorites">
                ⭐
            </NavLink>
            {isHome && <SearchBar onSearchDragonCards={handleCards}/>}
        </div>
    )
}

export default NavBar;