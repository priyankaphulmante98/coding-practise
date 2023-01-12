import React from 'react'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
} from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function Signup() {
    const [signup, setSignup] = useState({
        username: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(signup)
        axios.post(`https://emicalculator-api.onrender.com/signup`, signup)
            .then((res) => {
                //   console.log(res)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleChange = (e) => {
        const { value, name } = e.target
        setSignup({
            ...signup,
            [name]: value
        })
    }

    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="name">User Name</FormLabel>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                variant="filled"
                                onChange={handleChange}
                            />
                        </FormControl>
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
                            SignUp
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    )
}

export default Signup