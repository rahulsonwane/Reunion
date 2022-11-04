import React from 'react'
import Navbar from '../navbar/Navbar'
import './Sign.css'
import { useNavigate } from "react-router-dom";

function Sign() {
  const navigate = useNavigate();
  const goto = () => {
  navigate("/Login");
  };
  return (
  <div>
    <Navbar/>
    <div className='container'>
      <div className="sub-container">
      <div> 
        <h2 className='title'>Create Account</h2>
      </div>
      <div className='name'>
        <label className="label">Full Name </label>
        <input type="text"
         className="input"
         name="fullname"
        />
      </div>
      <div className='name'>
        <label className="label">Email </label>
        <input type="email"
         className="input"
         name="email"
        />
      </div>
      <div className='name'>
        <label className="label"> Password </label>
        <input type="password"
         className="input"
         name="pass"
        />
      </div>
      <div className="btnS">
        <button type="submit" onClick={goto}>Sign Up </button>
      </div>

     </div>
    </div>
  </div> 
  )
}

export default Sign