import React from "react";
import Adpage from "../Components/Adpage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { CarPage } from "../Components/CarPage";
import Wishlist from "../Components/Wishlist";


function AllRoute() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Adpage />}/>
        <Route path="/car" element={<CarPage />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
      
        
      
      </Routes>
    </div>
  );
}

export default AllRoute;
