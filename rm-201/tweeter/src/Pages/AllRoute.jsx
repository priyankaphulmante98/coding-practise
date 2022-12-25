import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import TimeLine from '../Components/TimeLine'
import UserProfile from '../Components/UserProfile'
import PrivateRoute from '../Components/PrivateRoute'

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/timeline' element={
          <PrivateRoute>
            <TimeLine />
          </PrivateRoute>
        } />
        <Route path='/userprofile' element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default AllRoute