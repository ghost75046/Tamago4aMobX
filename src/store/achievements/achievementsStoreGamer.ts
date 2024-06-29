import {observable} from "mobx";
import achievementUnlocked from "../../audio/achievementUnlockedSound.mp3";


const achievementsStoreGamer = observable(
    {
        id: 3,
        title: 'Игрок', //убрать 10 каках
        isUnlocked: 0,
        isVisible: false,
        Count: 0,
        isShow: '?',
        // isShow: 'show',

        achievementSound: new Audio(achievementUnlocked),
        //isVisible:true,
        showAchievement() {
            achievementsStoreGamer.isShow = 'show'
            achievementsStoreGamer.achievementSound.play()
            achievementsStoreGamer.isVisibleTimeout()
            console.log(' showAchievement')
        },
        makeIsVisibleFalse() {
            achievementsStoreGamer.isShow = '?'
            console.log('makeIsVisibleFalse')
        },
        isVisibleTimeout() {
            setTimeout(achievementsStoreGamer.makeIsVisibleFalse, 3000)
            console.log('isVisibleTimeout')
        }
    }
)


export default achievementsStoreGamer









