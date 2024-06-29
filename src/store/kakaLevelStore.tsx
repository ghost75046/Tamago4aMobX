import {observable} from "mobx";
import React from "react";
import KakaItem from "../components/stats/Kaka/KakaItem";
import PukSound from "../audio/pukSound.mp3";
import cloudWithTextStore from "./cloudWithTextStore";
import cleanerSound from "../audio/cleanerSound.mp3";
import emotionStore from "./emotionStore";
import achievementsStoreCleaner from "./achievements/achievementsStoreCleaner";


const kakaLevelStore = observable({
    kakaLevel: new Array(),
    kakaLevelIndex: 0,
    kakaLevelKey: 'food',
    kakaItemKey: '',
    kakaLevelIncrement() {

        if (kakaLevelStore.kakaLevel.length < 6) {
            kakaLevelStore.kakaItemKey = kakaLevelStore.kakaLevelKey + (kakaLevelStore.kakaLevelIndex + 1)
            kakaLevelStore.kakaLevel.push(<KakaItem key={kakaLevelStore.kakaItemKey}/>);
            kakaLevelStore.kakaLevelIndex++
            kakaLevelStore.PukingSound.play()
            cloudWithTextStore.textInCloudChange("время убирать какахи")
            emotionStore.changeEmotion()
        } else if (kakaLevelStore.kakaLevel.length == 6) {
            kakaLevelStore.kakaItemKey = kakaLevelStore.kakaLevelKey + (kakaLevelStore.kakaLevelIndex + 1)
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
            console.log(achievementsStoreCleaner.Count + ' kaka number ' + achievementsStoreCleaner.isShow)
            kakaLevelStore.kakaLevel.pop()
            achievementsStoreCleaner.Count++
            kakaLevelStore.CleaningSound.play()
            cloudWithTextStore.textInCloudChange("Спасибо за уборку!")
            emotionStore.changeEmotion()
            if (achievementsStoreCleaner.Count == 10) {
                //achievementsStoreCleaner.isShow = 'show'
                achievementsStoreCleaner.showAchievement()
                achievementsStoreCleaner.isUnlocked = 1
                console.log(achievementsStoreCleaner.isShow + 'kkkkk')
            }

        } else if (kakaLevelStore.kakaLevel.length == 0) {
            cloudWithTextStore.textInCloudChange("Здесь уже чисто")
            emotionStore.changeEmotion()
        }
    }


})


export default kakaLevelStore