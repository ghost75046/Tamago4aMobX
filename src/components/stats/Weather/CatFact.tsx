import React from "react";
import {observer} from "mobx-react-lite";
import catFactStore from "../../../store/catFactStore";
import './CatFact.css'


const CatFact = () => {

    return (<div className='catFact'>
            <p>Хочешь узнать интересный факт о кошках и потренировать свой английский, но у тебя лапки?</p>
            <p>Жмин на кнопку)</p>
            <button className="image-button" onClick={catFactStore.gettingWeather}></button>
            <p className='factText'>{catFactStore.currentWeather}</p>
        </div>
    )
}

export default observer(CatFact)



