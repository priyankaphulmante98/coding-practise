import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
