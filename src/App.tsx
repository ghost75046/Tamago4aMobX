import React from 'react';
import './App.css'
import Achievements from "./components/stats/Achievement";
import { Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";





const App = () => {

    return (
        <div>
        <header className='navBar'>
            <Link className='navBarLink' to="/">Игра   </Link>
            <Link className='navBarLink' to="/achievements">Достижения   </Link>
            <Link className='navBarLink' to="/about">Несуществующая страница</Link>
        </header>

                <Routes>
                    <Route  path="/" element={<MainPage />} />
                    <Route  path="/achievements" element={<Achievements />} />
                    <Route  path="*" element={<NotFound />} />
                </Routes>


        </div>





    )
}


export default App