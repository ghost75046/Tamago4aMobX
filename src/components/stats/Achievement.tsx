import React from "react";
import './Achievement.css'
import {observer} from "mobx-react-lite";

import AchievementGamer from "./AchievementGamer";
import AchievementCleaner from "./AchievementCleaner";


const Achievements = () => {

    return (
        <div className='achievementGrid'>
            <AchievementCleaner/>
            <AchievementGamer/>



            </div>
    )
}


export default observer(Achievements)

