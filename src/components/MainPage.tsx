import React from 'react';
import './MainPage.css'
import MyEgg from "./MyEgg";
import DarkTheme from "./DarkTheme";
import CatFact from "./stats/CatFact/CatFact";
import Achievement from "./test/AchievementCleanerPopup";
import AchievementGamerPopup from "./test/AchievementGamerPopup";
import AchievementExpertPopup from "./test/AchievementExpertPopup";


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
            <AchievementExpertPopup/>



        </div>


    )
}


export default MainPage