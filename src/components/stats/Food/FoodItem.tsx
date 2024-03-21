import React from "react";
import './FoodItem.css'
import shava from "../../../images/shaverma.png";

const FoodItem = () => {
    return (
        <div className='hungryItem'>
            <img src={shava} alt="#"/>
        </div>
    )
}


export default FoodItem