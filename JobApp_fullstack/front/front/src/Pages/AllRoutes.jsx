import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import JobList from './JobList'
import JobPost from './JobPost'

const AllRoutes = () => {
  return (
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/admin" element={<JobPost/>}/>
		<Route path="/jobs" element={<JobList/>}/>
	</Routes>
  )
}

export default AllRoutes