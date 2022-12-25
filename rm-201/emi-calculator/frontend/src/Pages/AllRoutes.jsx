import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calculator from '../Components/Calculator'
import EMI from '../Components/EMI'
import UserProfile from '../Components/UserProfile'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
  return (
    <div>
        <Routes>   
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/emi' element={<EMI/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes