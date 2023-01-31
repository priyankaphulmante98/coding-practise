import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'


function AllRoutes() {
  return (
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/Products' element={<Products />} />
   <Route path='/products/:id' element={<SingleProduct />} />
   </Routes>
  )
}

export default AllRoutes
