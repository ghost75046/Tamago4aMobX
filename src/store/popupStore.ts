import {observable} from "mobx";
import achievementUnlocked from "../audio/achievementUnlocked.mp3";


const achievementsStore = observable(
    {
        id: 3,
        title: 'Чистильщик', //убрать 10 каках
        isUnlocked: 0,
        isVisible: false,
        cleanedKakasCount: 0,
        isShow: '?',

        achievementSound:  new Audio(achievementUnlocked),
        //isVisible:true,
        showAchievement() {
            achievementsStore.isShow = 'show'
                achievementsStore.achievementSound.play()
            achievementsStore.isVisibleTimeout()
            console.log(' showAchievement')
        },
        makeIsVisibleFalse() {
            achievementsStore.isShow = '?'
            console.log('makeIsVisibleFalse')
        },
        isVisibleTimeout() {
            setTimeout(achievementsStore.makeIsVisibleFalse, 3000)
            console.log('isVisibleTimeout')
        }
    }
)


export default achievementsStore









