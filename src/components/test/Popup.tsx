import React from 'react';
import './Popup.css'; // Подключаем файл стилей
import achievementCleaner from "../../images/achievementCleaner.png"

import achievementsStore from "../../store/popupStore";
import {observer} from "mobx-react-lite";


const Popup = () => {


    return (
        <div>
            <button>getAchievement</button>
            <div className={"popup-container " + achievementsStore.isShow}>
                <div className="popup">
                    <img src={achievementCleaner} alt="" style={{height: '60px'}}/>
                    <p>Получено достижение <b>Чистильщик</b></p>
                </div>
            </div>
        </div>
    );
};

export default observer(Popup)