import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "orange",
        height: "50px",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <Link to="/">ADD page</Link>
      <Link to="/car">Cars page</Link>
      <Link to="/wishlist">Wishlist page</Link>
    </div>
  );
}

export default Navbar;
