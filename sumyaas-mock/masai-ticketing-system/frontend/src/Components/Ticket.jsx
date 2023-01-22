import React from 'react'
import { Spacer, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Ticket() {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2' bg={'#8E007D'} p={3} color={'white'}>
        <Flex minWidth='max-content' alignItems='center' gap='10'>
          <Link to='/'>Support Tickets</Link>
        </Flex>
        <Spacer />
        <Link to='createticket'><Button bg={'blue.500'}>Create</Button></Link>
      </Flex>
    </>
  )
}

export default Ticket
