import {observable} from "mobx";
import weatherCloud from "../images/weatherCloud.png"
import weatherPalceholder from "../images/weatherPlaceholder.png";



const weatherStore = observable({
    currentWeather: weatherPalceholder,
    myApiKey:'asEaqa4Xq4qMhyF',
    myLocationId:'74638',
    myLang: 'en',
    gettingWeather:async () => {


        const apiUrl = await fetch(`https://api.tutiempo.net/json/?lan=${weatherStore.myLang}&apid=${weatherStore.myApiKey}&lid=${weatherStore.myLocationId}`)
        const data = await apiUrl.json()
        //console.log(data)
        console.log(data.day1.text)
        const weatherApiResult = data.day1.text
        console.log(weatherApiResult)
        switch(weatherApiResult) {
            case 'Cloudy':
                weatherStore.currentWeather = weatherCloud;
                break;

            default:
                weatherStore.currentWeather = weatherPalceholder;
                break;
        }
        console.log(weatherStore.currentWeather)
        return weatherStore.currentWeather
    }

})


export default weatherStore









