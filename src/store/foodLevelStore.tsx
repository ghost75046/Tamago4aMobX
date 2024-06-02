import {observable} from "mobx";
import FoodItem from "../components/stats/Food/FoodItem";

import React from "react";
import crispsCrunch from "../audio/crispsCrunch.mp3";
import kakaLevelStore from "./kakaLevelStore";
import cloudWithTextStore from "./cloudWithTextStore";
import emotionStore from "./emotionStore";
import achievementsStore from "../store/achievementsStore"





const foodLevelStore = observable({
    foodLevel: [<FoodItem key="food0"/>],
    foodLevelIndex:1,
    foodLevelKey:'food',
    foodItemKey:'',
    foodLevelIncrement() {
        foodLevelStore.foodItemKey =  foodLevelStore.foodLevelKey + ( foodLevelStore.foodLevelIndex + 1)
        if (foodLevelStore.foodLevel.length < 6) {

            foodLevelStore.foodLevel.push(<FoodItem key={ foodLevelStore.foodItemKey}/>);
            foodLevelStore.foodLevelIndex++
            foodLevelStore.eatingSound.play()
            cloudWithTextStore.textInCloudChange("Спасибо за еду!")
            emotionStore.changeEmotion()
            foodLevelStore.foodItemIncrement()
            if (kakaLevelStore.kakaLevel.length < 7) {
                setTimeout(kakaLevelStore.kakaLevelIncrement, 5000);
                emotionStore.changeEmotion()
            }
        } else {
            cloudWithTextStore.textInCloudChange('Я не голоден')
        }
    },
    eatingSound: new Audio(crispsCrunch),
    makingHungry() {

        if (foodLevelStore.foodLevel.length > 1) {
            foodLevelStore.foodLevel.pop()
        }
        emotionStore.changeEmotion()
    },
    isHungry() {
        if (foodLevelStore.foodLevel.length < 3) {
            cloudWithTextStore.textInCloudChange("Я голоден")
        }
    },
    foodItemCount:0,
    foodItemIncrement() {
        console.log(foodLevelStore.foodItemCount)
        let achievementsStoreIndex
        foodLevelStore.foodItemCount+=1
        if (foodLevelStore.foodItemCount ===3) {
            for (achievementsStoreIndex in achievementsStore) {
                if (achievementsStore[achievementsStoreIndex].title == 'Кормилец') {
                    achievementsStore[achievementsStoreIndex].isUnlocked = true
                        // alert('Celaner')
                        //popupStore.showAchievement()
                    console.log('success')
                    console.log(achievementsStore[2])
                }
            }
        }
    }
})
setInterval(foodLevelStore.makingHungry, 7000);
setInterval(foodLevelStore.isHungry, 5000);

export default foodLevelStore