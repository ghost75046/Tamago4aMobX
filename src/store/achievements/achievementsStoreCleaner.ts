import {observable} from "mobx";
import achievementUnlocked from "../../audio/achievementUnlocked.mp3";


const achievementsStoreCleaner = observable(
    {
        id: 3,
        title: 'Чистильщик', //убрать 10 каках
        isUnlocked: 0,
        isVisible: false,
        Count: 0,
        isShow: '?',

        achievementSound:  new Audio(achievementUnlocked),
        //isVisible:true,
        showAchievement() {
            achievementsStoreCleaner.isShow = 'show'
                achievementsStoreCleaner.achievementSound.play()
            achievementsStoreCleaner.isVisibleTimeout()
            console.log(' showAchievement')
        },
        makeIsVisibleFalse() {
            achievementsStoreCleaner.isShow = '?'
            console.log('makeIsVisibleFalse')
        },
        isVisibleTimeout() {
            setTimeout(achievementsStoreCleaner.makeIsVisibleFalse, 3000)
            console.log('isVisibleTimeout')
        }
    }
)


export default achievementsStoreCleaner









