import {observable} from "mobx";


const achievementsStore = observable(
    {
        id: 3,
        title: 'Чистильщик', //убрать 10 каках
        isUnlocked: 0,
        isVisible: false,
        cleanedKakasCount: 0,
        isShow: '?',
        //isVisible:true,
        showAchievement() {
            achievementsStore.isShow = 'show'
            achievementsStore.isVisibleTimeout()
            console.log(' showAchievement')
        },
        makeIsVisibleFalse() {
            achievementsStore.isShow = '?'
            console.log('makeIsVisibleFalse')
        },
        isVisibleTimeout() {
            setTimeout(achievementsStore.makeIsVisibleFalse, 2000)
            console.log('isVisibleTimeout')
        }
    }
)


export default achievementsStore









