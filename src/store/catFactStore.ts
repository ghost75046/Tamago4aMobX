import {observable} from "mobx";
import achievementsStoreExpert from "./achievements/achievementsStoreExpert";


const catFactStore = observable({

    currentWeather: '',
    myApiKey: 'asEaqa4Xq4qMhyF',
    myLocationId: '74638',
    myLang: 'en',
    gettingFact: async () => {


        const apiUrl = await fetch(`https://catfact.ninja/fact`)
            .then(response => response.json())
            // return response

            .catch(() => {
                console.log('err')

            })


        //текстовое описание текущей погоды, которое получили в ответе погодного сервиса
        const weatherApiResult = apiUrl?.fact ?? `Кошачий консультант сейчас занят. Попробуй еще разок попозже)`

        catFactStore.currentWeather = weatherApiResult
        console.log('testttt' + weatherApiResult)

        achievementsStoreExpert.Count++
        console.log('cat count ' + achievementsStoreExpert.Count)

        if (achievementsStoreExpert.Count == 10) {
            //achievementsStoreExpert.isShow = 'show'
            achievementsStoreExpert.showAchievement()
            achievementsStoreExpert.isUnlocked = 1
            console.log(achievementsStoreExpert.isShow + 'kkkkk')
        }

        return catFactStore.currentWeather
    }

})


export default catFactStore









