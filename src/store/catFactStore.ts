import {observable} from "mobx";






const catFactStore = observable({

    currentWeather: '',
    myApiKey:'asEaqa4Xq4qMhyF',
    myLocationId:'74638',
    myLang: 'en',
    gettingWeather:async () => {


        const apiUrl = await fetch(`https://catfact.ninja/fact`)
             .then(response =>     response.json())
                 // return response

             .catch(() => {
                 console.log('err')

             })




        //текстовое описание текущей погоды, которое получили в ответе погодного сервиса
        const weatherApiResult = apiUrl?.fact  ?? `Кошачий консультант сейчас занят. Попробуй еще разок попозже)`

        catFactStore.currentWeather = weatherApiResult
        console.log('testttt' + weatherApiResult)


        return catFactStore.currentWeather
    }

})


export default catFactStore









