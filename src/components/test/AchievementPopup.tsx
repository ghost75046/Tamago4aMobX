import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementCleaner from "../../images/achievementCleaner.png"
import achievementsStoreCleaner from "../../store/achievements/achievementsStoreCleaner";
import {observer} from "mobx-react-lite";


const AchievementPopup = () => {


    return (
        <div>

            <div className={"popup-container " + achievementsStoreCleaner.isShow}>
                <div className="popup">
                    <img src={achievementCleaner} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Чистильщик</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementPopup);