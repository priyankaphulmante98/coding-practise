import { Input, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/navbar.css"
function Navbar() {
  return (
    <Box className="nav">
      <Input type="checkbox" id="nav-check" />
      <Box className="nav-header">
        <Text className="nav-title">
          LOGO
        </Text>
      </Box>
      <Box className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Box>

      <Box className="nav-links">
        <Link to="/about" target="_blank">About</Link>
        <span className="navigationSpace" />
        <Link to="" target="_blank">Portfolio</Link>
        <span className="navigationSpace" />
        <Link to="" target="_blank">Blog</Link>
        <span className="navigationSpace" />
        <Link to="" target="_blank">Contact</Link>
        <span className="navigationSpace" />
        <Button> <Link to="" target="_blank">Sign Up</Link></Button>
      </Box>

    </Box>
  )
}

export default Navbar
