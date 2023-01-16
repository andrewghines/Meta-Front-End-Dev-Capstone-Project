import React from "react";
import NavBar from "./NavBar";
import Logo from '../Assets/header-logo.png';
import './Stylesheet.css';

function Header(){
    return(
        <header>
            <img id='logo' src={Logo} alt="Little Lemon Logo"/>
            <NavBar/>
        </header>
    )
}

export default Header;