import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'

function AllRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/products' element={<Products /> } />
        <Route path='/products/:product_id' element={<SingleProduct/> } />



       </Routes>
    )
}

export default AllRoutes