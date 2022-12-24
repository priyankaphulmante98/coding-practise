import { Box, Select, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import JobCard from '../Components/JobCard';
import { getJobs } from '../Redux/AppReducer/action';

const JobList = () => {
	const { isLoading, jobs } = useSelector(store => store.appReducer);
	const [f,setF]=useState(null)
	const dispatch = useDispatch()
	console.log(jobs)

	const handleChange=(e)=>{
		console.log(e.target.value)
		// dispatch(getJobs(e.target.value))
		setF(e.target.value)
	}

	useEffect(() => {
		dispatch(getJobs(f))
	},[f])
	return (
		<Box>
			<VStack w="50%" margin="auto">
			<Select onChange={handleChange} name="position" required>
						<option value="">Filter By Position</option>
						<option value="Backend Developer">Backend Developer</option>
						<option value="Junior Frontend Developer">Junior Frontend Developer</option>
						<option value="FullStack Developer">FullStack Developer</option>
						<option value="Junior Backend Developer">Junior Backend Developer</option>
					</Select>
			</VStack>
			{
				jobs?.map((el,i)=>{
					return <JobCard key={i} {...el}/>
				})
			}
			
		</Box>
	)
}

export default JobList