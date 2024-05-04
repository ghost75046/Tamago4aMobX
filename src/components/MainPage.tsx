import React from 'react';
import './MainPage.css'
import MyEgg from "./MyEgg";
import DarkTheme from "./DarkTheme";
import CatFact from "./stats/Weather/CatFact";






const MainPage = () => {

    return (
        <div>
            <div className='mainDiv' style={{
                backgroundColor: `antiquewhite`
            }}>
                <DarkTheme/>
                <MyEgg />
                <CatFact/>


            </div>



        </div>





    )
}


export default MainPage