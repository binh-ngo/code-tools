import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './style.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [button, setButton] = useState("hidden")
  // const [form, setForm] = useState("visible")
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
    if(Auth.signIn(username, password)) {
      setUsername("");
      setPassword("");
      // setButton("visible");
      // setForm("hidden")
    }
  };

  function handleLogout() {
    Auth.signOut()
    .then(() => {
      console.log('User signed out');
    })
    .catch(error => {
      console.log('Error signing out', error);
    });
    // if(Auth.signOut(username, password)) {
    //   setButton("hidden");
    //   setForm("visible")
    }
  

  return (
    <div className='signin'>
    <form id="login-form" onSubmit={handleLogin}>
      <label>
        Username: 
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="loginBtn"type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    <button id="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
  );
  }
export default Login;
