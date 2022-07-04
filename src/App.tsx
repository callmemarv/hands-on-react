import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Bouncer from './component/bouncer/Bouncer'
import CatFinder from './component/cat-finder/CatFinder'
import Home from './component/home/Home'
import NotHome from './component/not-home/NotHome'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/not-home'} element={<NotHome/>}/>
                <Route path={'bouncer'} element={<Bouncer/>}/>
                <Route path={'cat'} element={<CatFinder/>}/>
                <Route path={'*'} element={<Navigate to={'/home'}/>}/>
            </Routes>
        </div>
    )
}

export default App
