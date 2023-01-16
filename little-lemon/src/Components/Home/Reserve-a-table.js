import React from "react";
import Dishes from "../../Assets/Dishes.jpg";
import '../Stylesheet.css';
import { NavLink } from "react-router-dom";

function ReserveATable(){
    return(
        <div id='container'>
            <div id='info-container'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink exact to='../Components/Reservation/Reservation'><button id='reserve-table-button'>Reserve a Table</button></NavLink>
            </div>
            <img src={Dishes} alt='Dishes' id="dishes-image"/>
        </div>
    )
}

export default ReserveATable;