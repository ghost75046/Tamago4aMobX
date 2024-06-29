import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementExpert from "../../../images/achievementExpert.png"
import {observer} from "mobx-react-lite";
import achievementsStoreExpert from "../../../store/achievements/achievementsStoreExpert";
import {useNavigate} from "react-router-dom";


const AchievementGamerPopup = () => {

    const navigate = useNavigate();

    function goToAchievements() {
        navigate('/achievements')

    }


    return (
        <div>

            <div className={"popup-container " + achievementsStoreExpert.isShow} onClick={goToAchievements}>
                <div className="popup">
                    <img src={achievementExpert} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Знаток</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementGamerPopup);