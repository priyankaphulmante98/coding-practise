import { Link } from 'react-router-dom'
import React from 'react'
import {Text} from "@chakra-ui/react"
function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:'space-around', height:'50px',background:'teal' , alignItems:'center', padding:'1.5rem'}}>
        <Link to="/signup"><Text>SignUp</Text></Link>
        <Link to="/login"><Text>Login</Text></Link>
        <Link to="/calculator"><Text>Calculator</Text></Link>
        <Link to="/emi"><Text>EMI</Text></Link>
    </div>
  )
}

export default Navbar