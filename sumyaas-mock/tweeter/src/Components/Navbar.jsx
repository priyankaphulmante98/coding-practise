import { Box, Button,Heading,ButtonGroup,Spacer,Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <Flex minWidth='max-content' alignItems='center' gap='2' bg={'#8E007D'} p={3} color={'white'}>
      <Flex  minWidth='max-content' alignItems='center' gap='10'>
        <Button colorScheme='purple' size='md'><Link to='/userprofile'>User Profile</Link></Button>
        <Button colorScheme='purple'size='md'> <Link to='/timeline'>Timeline</Link></Button>
      </Flex>
      <Spacer />
      <ButtonGroup gap='5'>
        <Button colorScheme='purple'><Link to='/signup'>Sign Up</Link></Button>
        <Button colorScheme='purple'> <Link to='/login'>Sign In</Link></Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Navbar