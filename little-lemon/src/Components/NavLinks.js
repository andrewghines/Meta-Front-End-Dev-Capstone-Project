import './Stylesheet.css';
import { React } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return(
        <ul>
            <li><a href={'#'}><NavLink exact to='/'>Home</NavLink></a></li>
            <li><a href={'#'}><NavLink exact to='/'>About</NavLink></a></li>
            <li><a href={'#'}><NavLink exact to='/'>Menu</NavLink></a></li>
            <li><a href={'#'}><NavLink exact to='../Components/Reservation/Reservation'>Reservations</NavLink></a></li>
            <li><a href={'#'}><NavLink exact to='/'>Order Online</NavLink></a></li>
            <li><a href={'#'}><NavLink exact to='/'>Log In</NavLink></a></li>
        </ul>
    )
}

export default NavLinks;