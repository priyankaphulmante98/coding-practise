import React from 'react'
import { Routes , Route} from 'react-router-dom'
import CartPage from '../Pages/CartPage'
import Home from '../Pages/Home'
import OrderPage from '../Pages/OrderPage'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'

function AllRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/products' element={<Products /> } />
        <Route path='/products/:product_id' element={<SingleProduct/> } />
        <Route path="/cart"   element={<CartPage/>}  />
        <Route path="/orders"   element={<OrderPage/>}  />



       </Routes>
    )
}

export default AllRoutes
