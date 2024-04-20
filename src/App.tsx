import React from 'react';
import './App.css'
import MyEgg from "./components/MyEgg";
import DarkTheme from "./components/DarkTheme";
import Weather from "./components/stats/Weather/Weather";

const App = () => {

    return (
        <div className='mainDiv' style={{
            backgroundColor: `antiquewhite`
        }}>

            <MyEgg/>
            <DarkTheme/>
            <Weather />
        </div>
    )
}


export default App