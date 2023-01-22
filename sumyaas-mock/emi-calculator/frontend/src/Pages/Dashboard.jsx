import { Box ,Text} from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
    <Box>
        <Link to="/profile"><Text>User Profile</Text></Link>
        <Link to="/calculator"><Text>Calculator</Text></Link>
    </Box>
  )
}

export default Dashboard