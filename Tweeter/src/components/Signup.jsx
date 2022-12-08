import React, { useContext } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthConext } from "../Context/AuthContexr";
let init = {
  img: "",
  name: "",
  email: "",
  password: "",
};
function Signup() {
  const [user, setState] = useState(init);
  const { state } = useContext(AuthConext);
  const navigate = useNavigate();

  const handleUser = (e) => {
    const { name, value } = e.target;
    setState({ ...user, [name]: value });
  };
  const postUser = (user) => {
    return fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  const checkUser = (email) => {
    let check = state.users?.find((e) => e.email == email);
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkUser(user.email)) {
      postUser(user)
        .then((res) => {
          console.log(res, "user posted");
          navigate("/signin");
        })
        .catch((err) => alert(res));
    } else {
      alert("user already exists");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Avatar</FormLabel>
          <Input
            type="text"
            placeholder="image url"
            name="img"
            onChange={handleUser}
            isRequired
          />
          <FormLabel>Full Name</FormLabel>
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

export default Signup;
