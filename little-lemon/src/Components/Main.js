import React from 'react';
import ReserveATable from './Reserve-a-table';
import OrderOnline from './OrderOnline';
import Specials from './Specials';
import './Stylesheet.css';

function Main(){
    return(
        <main>
            <ReserveATable/>
            <OrderOnline/>
            <Specials/>
        </main>
    )
}

export default Main;