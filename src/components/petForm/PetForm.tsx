import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './PetForm.css'
import dogtag from '../../images/dogtag.png'
import petNameStore from "../../store/petFormStore";

function PetForm() {
    // Создаем состояние для хранения имени питомца
    const [myPetName, setMyPetName] = useState('');
    console.log('curName' + myPetName + 'curName')
    // Обработчик для обновления состояния при изменении ввода
    const handleInputChange = (event: any) => {
        setMyPetName(event.target.value);
    };

    // Обработчик для отправки формы
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Здесь вы можете добавить логику для обработки данных формы, например, отправить их на сервер или вывести в консоль
        console.log('Имя питомца:', myPetName);
    };
    const navigate = useNavigate();

    function hideForm() {
        petNameStore.petName = myPetName
        navigate('/game')

    }


    return (
        <div className='PetForm'>
            <img src={dogtag} alt=""/>
            <form className='PetFormInput' onSubmit={handleSubmit}>

                <input type="text" value={myPetName} onChange={handleInputChange}/>


                <label>
                    Напиши имя питомца на бирке
                </label>
                <button type="submit" onClick={hideForm}>Написал</button>
                {/*<button type="submit" onClick={() => navigate('/')}>Отправить2</button>*/}

            </form>
        </div>
    );
}

export default PetForm;