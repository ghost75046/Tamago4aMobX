import React from 'react';
import './Kaka.css'
import kakaLevelStore from "../../../store/kakaLevelStore";
import {observer} from "mobx-react-lite";


const Kaka = () => {
    return (<div>
            <div className='kakaLevel'>
                {kakaLevelStore.kakaLevel}
            </div>
        </div>
    )
}


export default observer(Kaka)