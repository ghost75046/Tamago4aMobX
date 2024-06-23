import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementGamer from "../../images/achievementGamer.png"
import achievementsStoreGamer from "../../store/achievements/achievementsStoreGamer";
import {observer} from "mobx-react-lite";


const AchievementGamerPopup = () => {


    return (
        <div>

            <div className={"popup-container " + achievementsStoreGamer.isShow}>
                <div className="popup">
                    <img src={achievementGamer} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Игрок</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementGamerPopup);