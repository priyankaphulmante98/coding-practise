import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid white",
        width: "100%",
        padding:"1rem 0",
      
      }}
    >
      <Link to="/">UserProfile</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </div>
  );
}

export default Navbar;
