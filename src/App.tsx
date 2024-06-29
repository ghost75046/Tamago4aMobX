import React from 'react';
import './App.css'
import Achievements from "./components/Achievements/webPage/AchievementTable";
import {Route, Routes, Link} from 'react-router-dom';
import MainPage from "./gamePage/MainPage";
import NotFoundPage from "./components/svistelki/NotFoundPage";
import PetForm from "./components/petForm/PetForm";


const App = () => {

    return (
        <div>
            <header className='navBar'>
                <Link className='navBarLink' to="/game">Игра </Link>
                <Link className='navBarLink' to="/achievements">Достижения </Link>
                <Link className='navBarLink' to="/about">Несуществующая страница</Link>
            </header>

            <Routes>
                <Route path="/game" element={<MainPage/>}/>
                <Route path="/achievements" element={<Achievements/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/" element={<PetForm/>}/>
            </Routes>


        </div>


    )
}


export default App