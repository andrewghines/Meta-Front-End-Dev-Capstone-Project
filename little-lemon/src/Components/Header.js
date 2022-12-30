import React from "react"
import Nav from './Nav'

function Header(){
    return(
        <header style={{
            display: 'grid',
            gridAutoFlow: 'row',
            textAlign: 'center',
            gridAutoRows: 'repeat(12, 100px)'
        }}>
            <img alt="Little Lemon Logo"/>
            <Nav/>
        </header>
    )
}

export default Header;