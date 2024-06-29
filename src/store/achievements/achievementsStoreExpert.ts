import {observable} from "mobx";
import achievementUnlocked from "../../audio/achievementUnlockedSound.mp3";


const achievementsStoreExpert = observable(
    {
        id: 4,
        title: 'Знаток', //убрать 10 каках
        isUnlocked: 0,
        isVisible: false,
        Count: 0,
        isShow: '?',
        // isShow: 'show',

        achievementSound: new Audio(achievementUnlocked),
        //isVisible:true,
        showAchievement() {
            achievementsStoreExpert.isShow = 'show'
            achievementsStoreExpert.achievementSound.play()
            achievementsStoreExpert.isVisibleTimeout()
            console.log(' showAchievement')
        },
        makeIsVisibleFalse() {
            achievementsStoreExpert.isShow = '?'
            console.log('makeIsVisibleFalse')
        },
        isVisibleTimeout() {
            setTimeout(achievementsStoreExpert.makeIsVisibleFalse, 3000)
            console.log('isVisibleTimeout')
        }
    }
)


export default achievementsStoreExpert









