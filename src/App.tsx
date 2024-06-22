import React from 'react';
import './App.css'
import Achievements from "./components/stats/Achievement";
import {Route, Routes, Link} from 'react-router-dom';
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import PetForm from "./components/stats/PetForm";


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
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<PetForm/>}/>
            </Routes>


        </div>


    )
}


export default App