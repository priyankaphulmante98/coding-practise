import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import Timeline from "./Timeline";
import UserProfile from "./UserProfile";

function AllRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
