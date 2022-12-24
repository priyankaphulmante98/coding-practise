import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
	return (
		<div style={{display:"flex",justifyContent:"space-around"}}>
			<Link to="/admin">Job Posting Page</Link>
			<Link to="/jobs">Job Listing Page</Link>
		</div>
	)
}

export default Navbar