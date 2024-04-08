import React from 'react';
import './login.css';
import img1 from './image/img1.png';
// import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Login() {
    return (
        <>
            <div className="screen-container col-12">
                <div className='child-container col-6'>
                    <div className='rightside col-6'>
                        <img src={img1} alt='' />
                        <h4>Instance support and reply</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className='leftside col-6'>

                        <h5> Login </h5>

                        <div className='email-input'>
                            <label> email  </label>
                            <input />
                        </div>

                        <div className='password-input'>
                            <label> Password  </label>
                            <input />
                            <div className='eye-icon'>
                                <FaEye />
                            </div>
                        </div>

                        <div className='password-link'>
                            <a href='#'><span>forgot password</span></a>

                        </div>

                        <div className='button-login'>
                            <button>
                                <span>Login</span>
                            </button>
                        </div>

                        <div className='icon-list'>
                            <div className='google'>
                                <FcGoogle />
                            </div>

                            <div className='twitter' >
                                <FaSquareXTwitter />
                            </div>

                            <div className='facebook' >
                                <FaFacebook />
                            </div>
                        </div>

                        <div className='signin-section'>
                            <p>Don't have an account?
                                <a> Sign in </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login
