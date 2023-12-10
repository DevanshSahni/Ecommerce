import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/login.css";
import photographer from "../Assets/Photographer.png";
import waves from "../Assets/waves.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginContainer">
      <h1 className="loginHeading">Login</h1>
      <form className="loginForm">
        <input
          className="loginFormInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoFocus
        />
        <input
          className="loginFormInput"
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="loginFormFooter">
          <button type="submit" className="loginFormButton">
            Login
          </button>
          <Link to={"/signup"}>
            <button type="button" className="SignupFormButton">
              Signup
            </button>
          </Link>
        </div>
      </form>
      <img className="loginWaves" src={waves} alt="" />
      <img className="loginPhotographer" src={photographer} alt="" />
    </div>
  );
};

export default Login;
