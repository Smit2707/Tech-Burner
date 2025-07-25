import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Overlays from '../pages/Overlays'
import Layers from '../pages/Layers'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import ButAnarc from '../pages/ButAnarc'
import Cart from '../pages/Cart'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/overlays' element={<Overlays />} />
            <Route path='/layers' element={<Layers />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/anarc-details' element={<ButAnarc />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default MainRoute