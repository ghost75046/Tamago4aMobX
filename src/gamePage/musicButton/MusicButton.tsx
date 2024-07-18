import React from "react";
import "./MusicButton.css";
import musicButtonStore from "../../store/musicButtonStore";

import {observer} from "mobx-react-lite";

const MusciButton = () => {
    return (<div className="musicButtonDiv">

            <img onClick={musicButtonStore.musicButtonPlay} className="musicButton" src={musicButtonStore.currnetMusicImg} alt="#"/>
        </div>
    )
}

export default observer(MusciButton)






