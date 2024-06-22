import {observable} from "mobx";
import happy from "../images/emotionHappy.png"
import normal from "../images/emotionNormal.png"
import sad from "../images/emotionSad.png"
import foodLevelStore from "./foodLevelStore";
import kakaLevelStore from "./kakaLevelStore";
import playingStore from "./playingStore";
import Mrrr from "../audio/Mrrr.mp3";


const emotionStore = observable({
    currentEmotion: normal,
    mrrrSound: new Audio(Mrrr),
    changeEmotion() {
        if (foodLevelStore.foodLevel.length < 3 || kakaLevelStore.kakaLevel.length > 1 || !playingStore.ifPlayedRecently) {
            emotionStore.currentEmotion = sad
            emotionStore.mrrrSound.pause()
        } else if (foodLevelStore.foodLevel.length > 3 && kakaLevelStore.kakaLevel.length === 0 && playingStore.ifPlayedRecently) {
            emotionStore.currentEmotion = happy
            emotionStore.mrrrSound.play()

        } else {
            emotionStore.currentEmotion = normal
            emotionStore.mrrrSound.pause()
            ///
        }
    }

})


export default emotionStore









