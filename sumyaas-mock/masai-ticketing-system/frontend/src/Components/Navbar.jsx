import { Button, ButtonGroup, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg={'#8E007D'} p={3} color={'white'}>
                <Flex minWidth='max-content' alignItems='center' gap='10'>
                    <Link to='/'>Home</Link>
                </Flex>
                <Spacer />
                <Link to='signup'>Signup</Link>
                <Link to='login'>Login</Link>
            </Flex>
        </>
    )
}

export default Navbar