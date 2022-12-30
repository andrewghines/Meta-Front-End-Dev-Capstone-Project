import React from "react";
import Header from "./Header";

function Nav(){
    return(
        <nav>
            <ul style={{listStyleType: 'none'}}>
                <li><a href={'#' + Header}>Home</a></li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Log In</li>
            </ul>
        </nav>
    )
}

export default Nav;