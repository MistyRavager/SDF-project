import React from "react";
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar'
import Body from './components/body'
import Register from './components/register'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {GoogleLogin, GoogleLogout} from 'react-google-login';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
    const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    setisLoggedIn(true);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
    setisLoggedIn(false);
  };
  return (
    <BrowserRouter>
    <div className="container">
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Body />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      {isLoggedIn ? (
            <div className='sign-out-button'>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
          ) : (
            <GoogleLogin
              clientId={"742894497534-7ifju1knqvfussuga4kt2mlhe2o145dv.apps.googleusercontent.com"}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
