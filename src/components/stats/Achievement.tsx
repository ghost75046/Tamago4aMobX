import React from "react";
import './Achievement.css'
import {observer} from "mobx-react-lite";
import achievementCleaner from "../../images/achievementCleaner.png"

const Achievements = () => {
//управление заполнением прогрессбара
    //стор вывести в отдельный файл, сделать универсально под разные ачивки
    // и еще чтобы при наведении мыши появлялся текст, объясняющий за что ачивку дают и показывающий название ачивки как в стиме. После получения ачивки нужно всплывающее уведомление
    let progressbarPercent = 100
    //управление насыщенностью иконки
    let saturatePercent = 1
return (<div className="achievementContainer">

        <img className="achievementIcon" src={achievementCleaner} alt="" style={{
            filter: `saturate(${saturatePercent})`
        }}/>
        <div className="progressBar" style={{

            width: `${progressbarPercent}%`,
            height: '30px',
            backgroundColor: 'green'
        }}>

        </div>
        <div className="hover-text">
            <p>Убрать 10 каках</p>
        </div>
    </div>
)
}


export default observer(Achievements)

