
import React, { useEffect, useRef, useState } from 'react'
import {
    FormLabel,
    Input,
    Box
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
    let focusInput = useRef(null)

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userData)
        axios.post(`https://mock-api-oc4h.onrender.com/user`, userData)
            .then((res) => navigate('/login'))
    }
    const handleInputChange = ((e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData, [name]: value,
        })
    })
    useEffect(() => {
        focusInput.current.focus()
    }, [])
    return (
        <Box width={500} m={'auto'}>
            <form onSubmit={handleSubmit}>
                <FormLabel>User Name</FormLabel>
                <Input
                    name="username"
                    type='text'
                    isInvalid
                    errorBorderColor='black'
                    placeholder='Enter User Name'
                    onChange={handleInputChange}
                    ref={focusInput}
                />
                <br />
                <br />
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    type='email'
                    isInvalid
                    errorBorderColor='black'
                    placeholder='Enter Email'
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <FormLabel>Password</FormLabel>
                <Input
                    name='password'
                    type='password'
                    isInvalid
                    errorBorderColor='black'
                    placeholder='Enter Password'
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <Input
                    type='submit'
                    value='Submit'
                    bg={'gery.500'}
                    color={'black'}
                />

            </form>
        </Box>
    )
}

export default Signup