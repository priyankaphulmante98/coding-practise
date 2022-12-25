import { Vstack, Input, Select, Stack, VStack, Box, useRadio } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postJob } from "../Redux/AppReducer/action"
const initData = {
	company: "",
	city: "",
	location: "",
	role: "",
	level: "",
	position: "",
	language: "",
	contract: ""
}

const JobPost = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [job, setJob] = useState(initData);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setJob({ ...job, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(job)
		dispatch(postJob(job));
		// navigate("/jobs")

	}
	return (
		<Box w="50%" margin="auto">
			<h1>Post New Job</h1>
			<form onSubmit={handleSubmit}>
				<VStack spacing={3}>
					<Input onChange={handleChange} name="company" type="text" placeholder='enter comapany name' required />
					<Input onChange={handleChange} name="city" type="text" placeholder='enter city'  required/>
					<Input onChange={handleChange} name="location" type="text" placeholder='enter company location' required />
					<Select onChange={handleChange} name="role" required>
						<option value="">Select Job Role</option>
						<option value="Frontend">Frontend</option>
						<option value="Backend">Backend</option>
						<option value="FullStack">FullStack</option>
					</Select>
					<Select onChange={handleChange} name="level" required>
						<option value="">Select Level</option>
						<option value="Junior">Junior</option>
						<option value="Senior">Senior</option>
					</Select>
					<Select onChange={handleChange} name="position" required>
						<option value="">Select Position</option>
						<option value="Backend Developer">Backend Developer</option>
						<option value="Junior Frontend Developer">Junior Frontend Developer</option>
						<option value="FullStack Developer">FullStack Developer</option>
						<option value="Junior Backend Developer">Junior Backend Developer</option>
					</Select>
					<Select onChange={handleChange} name="language" required>
						<option value="">Select Language</option>
						<option value="Javascript">Javascript</option>
						<option value="JAVA">JAVA</option>
						<option value="C">C</option>
						<option value="C++">C++</option>
						<option value="Pyhton">Python</option>
					</Select>
					<Select onChange={handleChange} name="contract" required>
						<option value="">Select Contract Type</option>
						<option value="full time">full time</option>
						<option value="part time">part time</option>
					</Select>
					<Input type="submit" color={"green"}/>
				</VStack>
			</form>
		</Box >
	)
}

export default JobPost