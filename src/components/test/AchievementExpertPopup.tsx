import React from 'react';
import './AchievementPopup.css'; // Подключаем файл стилей
import achievementExpert from "../../images/achievementExpert.png"
import {observer} from "mobx-react-lite";
import achievementsStoreExpert from "../../store/achievements/achievementsStoreExpert";


const AchievementGamerPopup = () => {


    return (
        <div>
            <button>getAchievement</button>
            <div className={"popup-container "+ achievementsStoreExpert.isShow }>
                <div className="popup">
                    <img src={achievementExpert} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Знаток</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(AchievementGamerPopup);