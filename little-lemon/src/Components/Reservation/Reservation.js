import React from "react";
import '../Stylesheet.css';
function Reservation() {
    return(
        <form>
            <label for='name'>Name</label>
            <input type='text' id='name'/>
            <label for="res-date">Choose Date</label>
            <input type="date" id="res-date"/>
            <label for="res-time">Choose Time</label>
            <select id="res-time ">
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
            <label for="guests">Number of Guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            <label for="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input id='form-button' type="submit" value="Make Your reservation"></input>
        </form>
    )
}

export default Reservation;