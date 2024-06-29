import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementCleaner from "../../../images/achievementCleaner.png"
import achievementsStoreCleaner from "../../../store/achievements/achievementsStoreCleaner";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const AchievementCleanerPopup = () => {

    const navigate = useNavigate();

    function goToAchievements () {
        navigate('/achievements')

    }

    return (
        <div>

            <div className={"popup-container " + achievementsStoreCleaner.isShow} onClick={goToAchievements}>
                <div className="popup">
                    <img src={achievementCleaner} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Чистильщик</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementCleanerPopup);