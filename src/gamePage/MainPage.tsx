import React from 'react';
import './MainPage.css'
import MyEgg from "./MyEgg";
import DarkTheme from "../components/svistelki/DarkTheme/DarkTheme";
import CatFact from "../components/svistelki/CatFact/CatFact";
import Achievement from "../components/Achievements/Popup/AchievementCleanerPopup";
import AchievementGamerPopup from "../components/Achievements/Popup/AchievementGamerPopup";
import AchievementExpertPopup from "../components/Achievements/Popup/AchievementExpertPopup";


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