import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cartoon from '../pages/Cartoon'
import Homepage from '../pages/Homepage'
import Movies from '../pages/Movies'
import NotFound from '../pages/NotFound'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Tvshows from '../pages/Tvshows'


function Allroutes() {
    return (
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tvshow" element={<Tvshows/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/cartoon" element={<Cartoon/>} />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      
    )
}

export default Allroutes
