import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
    
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/form">
                Add Card
            </NavLink>
            <NavLink to="/favorites">
                Favorites
            </NavLink>
            {isHome && <SearchBar />}
        </div>
    )
}

export default NavBar;