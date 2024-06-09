import React from 'react';
import './MainPage.css'
import MyEgg from "./MyEgg";
import DarkTheme from "./DarkTheme";
import CatFact from "./stats/CatFact/CatFact";
import Achievement from "./test/AchievementPopup";
import AchievementGamerPopup from "./test/AchievementGamerPopup";


const MainPage = () => {

    return (
        <div>
            <div className='mainDiv' style={{
                backgroundColor: `antiquewhite`
            }}>
                <DarkTheme/>
                <MyEgg/>
                <CatFact/>
            </div>
            <Achievement/>
            <AchievementGamerPopup/>


        </div>


    )
}


export default MainPage