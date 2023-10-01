import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./Signup.css";
import TermAndCondition from "./TermAndCondition";


const Signup = () => {
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  
  const navigate = useNavigate ();
  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;


    const storeData = (userData) => {
      const prevData = JSON.parse(localStorage.getItem("userData")) || [];
      prevData.push(userData);
      localStorage.setItem("userData", JSON.stringify(prevData));
    };

    if( (name.length === 0 && username.length === 0)&&(email.length === 0 && phone.length === 0)) {
      setError(true);
      hasError = true;
    }
    if (!check) {
      setError(true);
      hasError = true;
    }
    if (!hasError) {
      const userData = {
        name: name,
        username: username,
        email: email,
        phone: phone,
        check: check,
      };
      storeData(userData);
      navigate("/category");
    }
  };

  return (
    <>
      <div id="container">
        <div className="left-side">
          <h1>Discover new things on Superapp</h1>
        </div>
        <div className="right-side">
          <h1>super app</h1>
          <h2>create your new account</h2>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              {error && name.length <= 0 ? <p>Field is required</p> : ""}
            </div>
            <div className="username">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {error && username.length <= 0 ? <p>Field is required</p> : ""}
            </div>

            <div className="email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {error && email.length <= 0 ? <p>Field is required</p> : ""}
            </div>

            <div className="phone">
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {error && phone.length <= 0 ? <p>Field is required</p> : ""}
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="term"
                value={check}
                onChange={() => setCheck(!check)}
              />
              <label htmlFor="term">
                Share my registration data with Superapp
              </label>
              {error && !check ? (
                <p>Check this box if you want to proceed</p>
              ) : (
                ""
              )}
            </div>

            <button>sign up</button>
           <TermAndCondition/>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
