import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { AuthConext } from "../Context/AuthContexr";

const init ={
  name:"",
  email:"",
  password:""
}
function Signin() {
  const [user,setUser]=useState(init)
  const {state}=useContext(AuthConext)
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const check=(u)=>{
    let val= state.users?.find(e=>e.email==u.email&&e.password==u.password)
    // console.log(val,"val")
    return val
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(check(user)){
      
      alert("login successfull")

    }else{
      alert("login failed")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>UserName</FormLabel>
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleUser}
            isRequired
          />

          <FormLabel>Email Adress</FormLabel>
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleUser}
            isRequired
          />

          <FormLabel>Password Name</FormLabel>
          <Input
            type="text"
            placeholder="password"
            name="password"
            onChange={handleUser}
            isRequired
          />
          <br />
          <br />
          <Input type={"submit"} value="submit" />
        </FormControl>
      </form>
    </div>
  );
}

export default Signin;
