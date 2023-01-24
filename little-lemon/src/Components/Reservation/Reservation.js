import React from "react";
import '../Stylesheet.css';
import { useState,useEffect } from "react";

function Reservation() {

    const url='https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

    const [name, setName]=useState('');
    const [date, setDate]=useState('');
    const [time, setTime]=useState('');
    const [guests, setGuests]=useState('');
    const [occasion, setOccasion]=useState('');

    function Submit(e){
        e.preventDefault();
        const data=[name,date,time,guests,occasion];
        console.log(data);
    }

    return(
        <>
        <form onSubmit={(e => {Submit(e)})}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e) => setName(e.target.value)} value={name} required/>
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)} value={date} required/>
            <label htmlFor="res-time">Choose Time</label>
            <select id="res-time " onChange={(e) => setTime(e.target.value)} value={time} required>
                <option>12:00</option>
                <option>1:00</option>
                <option>2:00</option>
                <option>3:00</option>
                <option>4:00</option>
                <option>5:00</option>
                <option>6:00</option>
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  onChange={(e) => setGuests(e.target.value)} value={guests} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)} value={occasion} required>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input id='form-button' type="submit" value="Make Your reservation"></input>
        </form>
        </>
    )
}

export default Reservation;