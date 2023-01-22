import React, { useEffect } from 'react'
import {
    Box,
    Button,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
} from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const date = new Date();
    const time = ((date.getHours().toString()).length > 1 ? date.getHours() : "0" + date.getHours()) + ":" + ((date.getMinutes().toString()).length > 1 ? date.getMinutes() : "0" + date.getMinutes());
    const [login, setLogin] = useState({ email: "", password: "", timestamp: time })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(login)
        axios.post(`https://emicalculator-api.onrender.com/login`, login)
            .then((res) => {
                // console.log(res.data)
                if (res.data.token) {
                    navigate('/profile')
                    localStorage.setItem('user_token', JSON.stringify(res.data.token))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleChange = (e) => {
        const { value, name } = e.target
        setLogin({
            ...login,
            [name]: value
        })
    }

    return (
        <Box>
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
                <Box bg="white" p={6} rounded="md">
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    variant="filled"
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full">
                                Login
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </Box>

    )
}

export default Login