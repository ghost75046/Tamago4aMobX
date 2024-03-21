import React from 'react';
import './Food.css'
import foodLevelStore from "../../../store/foodLevelStore";
import {observer} from "mobx-react-lite";


const Food = () => {
    return (
        <div>
            <div className='hungryLevel'>
                {foodLevelStore.foodLevel}
            </div>
        </div>
    )
}


export default observer(Food)