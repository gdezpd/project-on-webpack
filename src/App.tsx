import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './style/index.scss'
import {AboutPageAsync} from "./components/AboutPage/AboutPage.async";
import {MainPageAsync} from "./components/MainPage/MainPage.async";
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главную</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;