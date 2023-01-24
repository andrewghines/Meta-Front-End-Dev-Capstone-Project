import React from 'react';
import './Stylesheet.css';

function Footer(){
    return(
        <footer>
            <div id='newsletter-container'>
                <h2 id='footer-h2'>Sign up for our Newsletter!</h2>
                <input id='footer-input' type='email' placeholder='Enter your email address'/>
                <button id='button' type='button'>Sign Up</button>
            </div>
            <div id='copyright-container'>
                <p id='copyright-p'>copyright Little Lemon</p>
            </div>
        </footer>
    )
}

export default Footer;