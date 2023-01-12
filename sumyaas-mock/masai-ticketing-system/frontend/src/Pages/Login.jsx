import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import {
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Auth/auth.action'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        dispatch(login(loginData))
        navigate("/ticket")
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    return (
        <Box width={500} m={'auto'}>
            <form onSubmit={handleSubmit}>
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    type='email'
                    isInvalid
                    errorBorderColor='crimson'
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
                    errorBorderColor='crimson'
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

export default Login