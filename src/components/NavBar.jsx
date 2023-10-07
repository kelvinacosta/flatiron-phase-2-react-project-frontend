import React from "react";
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
        <div className="navBar-container">
            <NavLink to="/">
            <img src="/icons/home.png" className="home-icon" alt="home"/>
            </NavLink>
            <NavLink to="/form">
                <img src="/icons/add.png" alt="add" className="add-icon"/>
            </NavLink>
            <NavLink to="/favorites">
            <img src="/icons/star.png" alt="star" className="star-icon"/>
            </NavLink>
            
        </div>
            {isHome && <SearchBar  onSearchDragonCards={handleCards}/>}
        </div>
    )
}

export default NavBar;