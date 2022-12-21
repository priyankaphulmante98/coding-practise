import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "../components/Todo";
import LogicCard from "./Login";
import Navbar from "./Navbar";
import SignupCard from "./Signup";

function AllRoute() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/login" element={<LogicCard />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </>
  );
}

export default AllRoute;
