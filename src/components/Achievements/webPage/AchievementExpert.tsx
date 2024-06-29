import React from "react";
import './Achievement.css'
import {observer} from "mobx-react-lite";
import achievementExpert from "../../../images/achievementExpert.png"
import achievementsStoreExpert from "../../../store/achievements/achievementsStoreExpert";

const Achievements = () => {
//управление заполнением прогрессбара
    //стор вывести в отдельный файл, сделать универсально под разные ачивки
    // и еще чтобы при наведении мыши появлялся текст, объясняющий за что ачивку дают и показывающий название ачивки как в стиме. После получения ачивки нужно всплывающее уведомление
    let progressbarPercent = (achievementsStoreExpert.Count<11) ? achievementsStoreExpert.Count * 10 : 100
    //управление насыщенностью иконки
    let saturatePercent = achievementsStoreExpert.isUnlocked
    return (


        <div className="achievementContainer">
            <div className="achievementItem">

                <img className="achievementIcon" src={achievementExpert} alt="" style={{
                    filter: `saturate(${saturatePercent})`
                }}/>

                <div className='progressBarBorder' style={{
                    width: `300px`,
                    border: "solid",
                    // display:"flex",
                    // justifyContent:"center",
                    // alignItems:"center"
                }}>

                    <div className="progressBar" style={{

                        width: `${progressbarPercent}%`,
                        height: '30px',
                        backgroundColor: 'green',


                        // border: 'solid'
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center'

                    }}>
                        <div className="cleanedKakasCount">
                            {(achievementsStoreExpert.Count<11) ? achievementsStoreExpert.Count : 10}/10
                        </div>
                    </div>

                </div>

                <div className="hover-text">

                    <b>Знакток</b>
                    <p>Запросить 10 фактов о котах</p>

                </div>
            </div>
        </div>


    )
}


export default observer(Achievements)

