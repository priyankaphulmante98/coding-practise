import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const { authState, dispatch } = useContext(AppContext);
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "" })
  const handleSubmit = (e) => {
    e.preventDefault();
    let btn = document.querySelector("button")
    btn.disabled=true
    // btn.addEventListener("click", () => {
    //   btn.disabled = true
    // })
    console.log(user)
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.token });
          navigate("/dashboard")

        }
        else {
          throw new Error("email or password is wrong")
        }
      })
      .catch(err => { console.log(err) })
  }
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input
              onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
              data-testid="email-input"
              type="email"
              placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
