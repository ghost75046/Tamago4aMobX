import React from 'react';
import './App.css'
import MyEgg from "./components/MyEgg";
import DarkTheme from "./components/DarkTheme";

import CatFact from "./components/stats/Weather/CatFact";

const App = () => {

    return (
        <div className='mainDiv' style={{
            backgroundColor: `antiquewhite`
        }}>
            <DarkTheme/>
           <MyEgg />
            <CatFact/>



        </div>
    )
}


export default App