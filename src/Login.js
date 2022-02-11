import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <Link to="/">
            <img className='login_logo' src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="password" />

                <button className='login_signInButton'>Sign In</button>

                <p>
                    By Signing-in you agree to the Amazon fake clone Conditions of Use and Sale. Please see out Privacy Notice, Our Cookies Notice and our Intrest-Based Ads Notice.
                </p>

                <button className='login_registerButton'>Create your Amazon account</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
