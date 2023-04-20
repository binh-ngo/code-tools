import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import './style.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await Auth.signIn(username, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  async function signUp(username, password) {
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
      });
      console.log(`Username: ${signUpResponse.user.username}`);
      console.log(`Password: ${password}`);
    } catch (error) {
      console.log('Error signing up:', error);
    }
  }

  signUp("binhbinhbinh", "thisismypassword")
  return (
    <form onSubmit={handleLogin}>
      <label>
        Username: 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Login;
