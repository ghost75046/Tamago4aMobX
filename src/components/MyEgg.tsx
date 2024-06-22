import Food from "./stats/Food/Food";
import Kaka from "./stats/Kaka/Kaka";
import GamingButtons from "./GamingButtons";
import React from "react";
import "./MyEgg.css";
import CloudWithText from "./CloudWithText";
import Pet from "./Pet";
import Emotion from "./stats/Emotion";
import eggStore from "../store/eggStore";
import petNameStorage from "../store/petNameStorage";
import dogtagSingle from "../images/dogtagSingleThin.png"


const MyEgg = () => {
    return (
        <div className='myEgg' style={{
            backgroundImage: `url(${eggStore.currentEgg}),  url(${eggStore.roomWindowBackground})`,
            backgroundSize: 'cover, 350px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center, 200px 230px',
            width: '700px',
            height: '795px',
            margin: '0 auto'
        }}>

            <CloudWithText/>

            <Emotion/>
            <Food/>
            <Pet/>
            <Kaka/>

            <GamingButtons/>

            <div className="dogtagSingle"
                 style={{
                     backgroundImage: `url(${dogtagSingle})`,
                     backgroundSize: 'cover, 350px',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center, 200px 230px',
                     width: '221px',
                     height: '58px',
                     marginTop: '30px'

                 }}>

                {/*<img src={dogtagSingle} alt=""/>*/}
                <p className="petName">{petNameStorage.petName}</p>
            </div>
        </div>
    )
}

export default MyEgg


