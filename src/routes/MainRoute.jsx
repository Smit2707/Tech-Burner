import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Team from '../pages/Team'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
        </Routes>
    )
}

export default MainRoute