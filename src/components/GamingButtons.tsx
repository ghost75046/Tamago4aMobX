import React from 'react';
import '../App.css'
import './GamingButtons.css'
import foodLevelStore from "../store/foodLevelStore";
import kakaLevelStore from "../store/kakaLevelStore";
import playingStore from "../store/playingStore";


const GamingButtons = () => {

    return (
        <div className='GamingButtons'>
            <button onClick={foodLevelStore.foodLevelIncrement}><b>Feed</b></button>
            <button id='cleanButton' onClick={kakaLevelStore.kakaCleaner}><b>Clean</b></button>
            <button onClick={playingStore.playing}><b>Play</b></button>

        </div>


    )

}


export default GamingButtons