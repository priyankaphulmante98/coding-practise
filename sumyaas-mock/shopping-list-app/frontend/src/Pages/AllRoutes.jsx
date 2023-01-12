import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Bookmark from '../Components/Bookmark'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/bookmarks" element={<Bookmark />} />
            </Routes>
        </div>
    )
}

export default AllRoutes