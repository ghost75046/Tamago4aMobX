import React, { useState} from 'react';
import './Popup.css'; // Подключаем файл стилей
import achievementCleaner from "../../images/achievementCleaner.png"
const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showMyAchievement = () =>  {

            setIsVisible(true)


            setTimeout(() => {
            setIsVisible(false);
        }, 2000)
        // Время в миллисекундах, через которое окно исчезнет


    } // Пустой массив зависимостей, чтобы useEffect выполнился только при монтировании

    return (
        <div>
            <button onClick={showMyAchievement}>getAchievement</button>
        <div className={isVisible ? "popup-container show" : "popup-container"}>
            <div className="popup">
                <img src={achievementCleaner} alt="" style={{height:'60px'}}/>
                <p>Получено достижение <b>Чистильщик</b></p>
            </div>
        </div>
        </div>
    );
};

export default Popup;