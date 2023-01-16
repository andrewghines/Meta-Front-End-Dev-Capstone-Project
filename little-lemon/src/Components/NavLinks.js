import './Stylesheet.css';
import Header from './Header';

const NavLinks = () => {
    return(
        <ul>
            <li><a href={'#' + Header}>Home</a></li>
            <li><a href={'#' + Header}>About</a></li>
            <li><a href={'#' + Header}>Menu</a></li>
            <li><a href={'#' + Header}>Reservations</a></li>
            <li><a href={'#' + Header}>Order Online</a></li>
            <li><a href={'#' + Header}>Log In</a></li>
        </ul>
    )
}

export default NavLinks;