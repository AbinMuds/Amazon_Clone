import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it succesfully created a new user with email and pasword
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login_logo' src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button onClick={signIn} className='login_signInButton'>Sign In</button>

                <p>
                    By Signing-in you agree to the Amazon fake clone Conditions of Use and Sale. Please see out Privacy Notice, Our Cookies Notice and our Intrest-Based Ads Notice.
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
