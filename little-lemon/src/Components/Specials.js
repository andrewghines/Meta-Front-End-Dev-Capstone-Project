import React from "react";
import Salad from "../Assets/GreekSalad.jpg";
import Gyro from "../Assets/Gyro.jpg";
import Dessert from "../Assets/LemonDessert.jpg";
import {FaCarSide} from "react-icons/fa";
import './Stylesheet.css';

function Specials(){
    return(
        <div id="specials-container">
            {/*Card 1*/}
            <div id="card">
                <img src={Salad} alt="Greek Salad" className="food-image"/>
                <div className='name-price-container'>
                    <h2 className="food-item">Greek Salad</h2>
                    <h2 className="price">$12.99</h2>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="order-container">
                    <h2 className="order-prompt">Order a Delivery</h2>
                    <FaCarSide/>
                </div>
            </div>
            {/*Card 2*/}
            <div id="card">
                <img src={Gyro} alt="Gyro" className="food-image"/>
                <div className="name-price-container">
                    <h2 className="food-item">Gyro</h2>
                    <h2 className="price">$8.99</h2>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="order-container">
                    <h2 className="order-prompt">Order a Delivery</h2>
                    <FaCarSide/>
                </div>
            </div>
            {/*Card 3*/}
            <div id="card">
                <img src={Dessert} alt="Lemon Dessert" className="food-image"/>
                <div className="name-price-container">
                    <h2 className="food-item">Lemon Dessert</h2>
                    <h2 className="price">$5.99</h2>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="order-container">
                    <h2 className="order-prompt">Order a Delivery</h2>
                    <FaCarSide/>
                </div>
            </div>
        </div>
    )
}

export default Specials;