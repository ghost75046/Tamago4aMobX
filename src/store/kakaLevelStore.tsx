import {observable} from "mobx";
import React from "react";
import KakaItem from "../components/stats/Kaka/KakaItem";
import PukSound from "../audio/Puk.mp3";
import cloudWithTextStore from "./cloudWithTextStore";
import cleanerSound from "../audio/cleanerMusic.mp3";
import emotionStore from "./emotionStore";
import achievementsStore from "./popupStore";


const kakaLevelStore = observable({
    kakaLevel: new Array(),
    kakaLevelIndex:0,
    kakaLevelKey:'food',
    kakaItemKey:'',
    kakaLevelIncrement() {

        if (kakaLevelStore.kakaLevel.length < 6) {
            kakaLevelStore.kakaItemKey =  kakaLevelStore.kakaLevelKey + ( kakaLevelStore.kakaLevelIndex + 1)
            kakaLevelStore.kakaLevel.push(<KakaItem key={kakaLevelStore.kakaItemKey}/>);
            kakaLevelStore.kakaLevelIndex++
            kakaLevelStore.PukingSound.play()
            cloudWithTextStore.textInCloudChange("время убирать какахи")
            emotionStore.changeEmotion()
        } else if (kakaLevelStore.kakaLevel.length == 6) {
            kakaLevelStore.kakaItemKey =  kakaLevelStore.kakaLevelKey + ( kakaLevelStore.kakaLevelIndex + 1)
            kakaLevelStore.kakaLevel.push(<KakaItem key={kakaLevelStore.kakaItemKey}/>);
            kakaLevelStore.kakaLevelIndex++
            kakaLevelStore.PukingSound.play()
            cloudWithTextStore.textInCloudChange("утонул в какахах")
        }

    },
    PukingSound: new Audio(PukSound),
    CleaningSound: new Audio(cleanerSound),
    kakaCleaner() {

        if (kakaLevelStore.kakaLevel.length > 0) {
            console.log(achievementsStore.cleanedKakasCount + ' kaka number ' + achievementsStore.isShow)
            kakaLevelStore.kakaLevel.pop()
            achievementsStore.cleanedKakasCount++
            kakaLevelStore.CleaningSound.play()
            cloudWithTextStore.textInCloudChange("Спасибо за уборку!")
            emotionStore.changeEmotion()
            if (achievementsStore.cleanedKakasCount == 10) {
                //achievementsStore.isShow = 'show'
                achievementsStore.showAchievement()
                achievementsStore.isUnlocked = 1
                console.log(achievementsStore.isShow +'kkkkk')
            }
            // achievementsStore.cleanedKakasCount++
        } else if (kakaLevelStore.kakaLevel.length == 0) {
            cloudWithTextStore.textInCloudChange("Здесь уже чисто")
            emotionStore.changeEmotion()
        }
    }


})


export default kakaLevelStore