import React from 'react';
import './App.css'
import MyEgg from "./components/MyEgg";
import DarkTheme from "./components/DarkTheme";
import CatFact from "./components/stats/Weather/CatFact";
import Achievements from "./components/stats/Achievement";




const App = () => {

    return (
        <div>
    <div className='mainDiv' style={{
            backgroundColor: `antiquewhite`
        }}>
            <DarkTheme/>
           <MyEgg />
            <CatFact/>


        </div>
            <div className='achievments'>
                <Achievements />
            </div>

        </div>


    )
}


export default App