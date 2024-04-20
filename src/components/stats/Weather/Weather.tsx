import React from "react";
import {observer} from "mobx-react-lite";
import weatherStore from "../../../store/weatherStore";
import './Weather.css'


const Weather = () => {
    weatherStore.gettingWeather()
    return (<div className='Weather'>

            <img src={weatherStore.currentWeather} alt="#"/>
        </div>
    )
}

export default observer(Weather)



