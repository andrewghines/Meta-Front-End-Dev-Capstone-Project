import Header from './Components/Home/Header'
import Home from './Components/Home/Home';
import Reservation from './Components/Reservation/Reservation';
import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
        <HashRouter>
        <Header/>
        <div className='content'>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Components/Reservation/Reservation' element={<Reservation/>}/>
            </Routes>
        </div>
        </HashRouter>
    </>
  );
}

export default App;
