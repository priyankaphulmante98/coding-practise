import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateTicket from '../Components/CreateTicket'
import Home from '../Components/Home'
import Ticket from '../Components/Ticket'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/ticket' element={<Ticket />} />
                <Route path='/createticket' element={<CreateTicket />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
