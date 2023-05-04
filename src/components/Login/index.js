import React, { useContext, useState } from 'react';
// import { Auth } from 'aws-amplify';
import './style.css';
import { AccountContext } from '../User/Accounts.tsx';
import { useNavigate } from 'react-router-dom';
// TODO: add a message whether or not a user logged in or entered an incorrect UN or PW

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('')
  
  const { loggedInUser, signIn } = useContext(AccountContext);

  let navigate = useNavigate();
  let from = props.from || "/";

  const onSubmit = (event) => {
    event.preventDefault();

    signIn(username, password)
      .then((data) => {
        console.log("Logged in.", data);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error("Error logging in.", err);
      });
  };
  return (
    <div className='signin'>
    {!loggedInUser && (
    <form id="login-form" onSubmit={onSubmit}>
      <label>
        Username:
        <input className="textField" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input className="textField" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="loginBtn"type="submit">Login</button>
      {errorMessage && <p style={{marginTop: ".5%"}}>{errorMessage}</p>}
      {/* {successMessage && <p style={{marginTop: ".5%"}}>{successMessage}</p>} */}
    </form>
    )}
    </div>
  );
  }
export default Login;
