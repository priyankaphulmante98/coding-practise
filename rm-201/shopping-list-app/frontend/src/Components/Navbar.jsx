import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '60px', background: "teal", alignItems: 'center', color: 'white' }}>
            <Link style={{ color: 'white' }}
                to='/' >Home Page</Link>
            <Link style={{ color: 'white' }}
                to='/product' >Product Page</Link>
            <Link style={{ color: 'white' }}
                to='/bookmarks' >Bookmark Page</Link>
                
        </div>
    )
}

export default Navbar