import React from 'react'
import Navbar from '../navbar/Navbar'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const goto = () => {
    navigate("/");
 
  };

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div>
                            <h1>Login Page</h1>
                            <div>

                                <input type="text" placeholder="Enter Your Name" className="name" />
                            </div>
                            <div className="second-input">

                                <input type="password" placeholder="user Password" className="name" />
                            </div>
                            <div className="login-button">
                                <button className='btn1' onClick={goto}>Login</button>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            );

        </div>
    )
}

export default Login