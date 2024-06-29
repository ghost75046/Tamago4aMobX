import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementGamer from "../../../images/achievementGamer.png"
import achievementsStoreGamer from "../../../store/achievements/achievementsStoreGamer";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const AchievementGamerPopup = () => {

    const navigate = useNavigate();

    function goToAchievements() {
        navigate('/achievements')

    }

    return (
        <div>

            <div className={"popup-container " + achievementsStoreGamer.isShow} onClick={goToAchievements}>
                <div className="popup">
                    <img src={achievementGamer} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Игрок</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementGamerPopup);