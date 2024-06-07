import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementCleaner from "../../images/achievementCleaner.png"
import achievementsStoreGamer from "../../store/achievements/achievementsStoreGamer";
import {observer} from "mobx-react-lite";


const AchievementGamerPopup = () => {


    return (
        <div>
            <button>getAchievement</button>
            <div className={"popup-container " + achievementsStoreGamer.isShow}>
                <div className="popup">
                    <img src={achievementCleaner} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Игрок</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementGamerPopup);