import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import {
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/AuthReducer/action'
import { useNavigate } from 'react-router-dom'
function Login() {
    const isAuth = useSelector((state)=>state.authReducer.isAuth)
    console.log(isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const focusInput = useRef()
    const [loginData, setLoginData] = useState({ fullname: '', email: '', password: '' })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        dispatch(login(loginData))
    }
    useEffect(()=>{
        focusInput.current.focus()
        if(isAuth){
            navigate('/userprofile') 
        }
    },[isAuth])

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
            <FormLabel>Username</FormLabel>
                <Input
                    name="fullname"
                    type='text'
                    isInvalid
                    errorBorderColor='crimson'
                    placeholder='Enter Full Name'
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