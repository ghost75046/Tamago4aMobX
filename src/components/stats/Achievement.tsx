import React from "react";
import './Achievement.css'
import {observer} from "mobx-react-lite";

import AchievementGamer from "./AchievementGamer";
import AchievementCleaner from "./AchievementCleaner";
import AchievementExpert from "./AchievementExpert";


const Achievements = () => {

    return (
        <div className='achievementGrid'>
            <AchievementCleaner/>
            <AchievementGamer/>
            <AchievementExpert/>


            </div>
    )
}


export default observer(Achievements)

