import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AuthContext";

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(loginData)
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "Content-Type": "application/json" }
      })
      let data = await res.json()
      // console.log(data)
      if (data.token) {
        dispatch({ type: "LOGIN_SUCCESS", payload: data.token })
        navigate('/dashboard')
      }else{
        throw new Error("BYE BYE")
      }
    }
    catch (err) {
      console.log(err)
    }

    // fetch(`https://reqres.in/api/login`, {
    //   method: "POST",
    //   body: JSON.stringify(loginData),
    //   headers: { "Content-Type": "application/json" }
    // }).then((res) => res.json())
    //   .then((res) => {
    //     if (res.token) {
    //       dispatch({ type: "LOGIN_SUCCESS", payload: res.token })
    //       navigate('/dashboard')
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }



  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email"
              onChange={(e) => setLoginData({
                ...loginData,
                email: e.target.value,
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e) => setLoginData({
                ...loginData,
                password: e.target.value,
              })}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
