import {observable} from "mobx";



const achievementsStore = observable([
    {
        id: 1,
        title: 'Хозяин', //зайти в игру
        isUnlocked: false,
    },
    {
        id: 2,
        title: 'Бунтарь', //нажать кнопку "не нажимай"
        isUnlocked: false
    },
    {
        id: 3,
        title: 'Чистильщик', //убрать 10 каках
        isUnlocked: false
    },
    {
        id: 4,
        title: 'Жажда знаний', //Запросить 10 фактов о котах
        isUnlocked: false
    },
    {
        id: 5,
        title: 'Кормилец', //Запросить 10 фактов о котах
        isUnlocked: false
    }
])


export default achievementsStore









