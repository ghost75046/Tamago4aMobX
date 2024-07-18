import {observable} from "mobx";
import backgroundMusicSound from "../audio/backgroundMusicSound.mp3";
import musicOnImg from "../images/musicOn.png";
import musicOffImg from "../images/musicOff.png";







const musicButtonStore = observable({
    currnetMusicImg: musicOffImg,
    isMusicPlayingoNow: false,
    musicButtonPlay() {

        if (musicButtonStore.isMusicPlayingoNow === false) {
            musicButtonStore.musicButtonSound.volume = 0.1; //регулировка грокости, потом вынести настройку в UI. Реализовать ползунком в качестве тренировки.
            musicButtonStore.musicButtonSound.play()
            musicButtonStore.isMusicPlayingoNow = true
            musicButtonStore.currnetMusicImg = musicOnImg
        } else if (musicButtonStore.isMusicPlayingoNow === true) {
            musicButtonStore.musicButtonSound.volume = 0.1; //регулировка грокости, потом вынести настройку в UI. Реализовать ползунком в качестве тренировки.
            musicButtonStore.musicButtonSound.pause()
            musicButtonStore.isMusicPlayingoNow = false
            musicButtonStore.currnetMusicImg = musicOffImg

        }
    },
    musicButtonSound: new Audio(backgroundMusicSound)


})


export default musicButtonStore






