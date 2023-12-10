import React, { useState } from "react";
import waves from "../Assets/waves.png";
import "../CSS/signup.css";
import { Link } from "react-router-dom";
import painter from "../Assets/Artist.png"

const Signup = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup">
      <img className="signupWaves" src={waves} alt="" />
      <h1 className="signupHeading">Signup</h1>
      <form className="signupForm">
      <img className="signupArtist" src={painter} alt="" />
        <input
          className="signupFormInput"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="signupFormInput"
          type="number"
          placeholder="Number"
          onChange={(e) =>
            e.target.value.length <= 10 ? setNumber(e.target.value) : null
          }
          value={number}
          maxLength={10}
        />
        <input
          className="signupFormInput"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="signupFormInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="signupFormFooter">
          <button type="submit" className="signupFormButton">
            Signup
          </button>
          <Link to={"/login"}>
            <button type="button" className="signupFormLoginButton">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
