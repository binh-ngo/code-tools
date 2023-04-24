import React from 'react';
import Login from '../Login';
import { Auth } from 'aws-amplify';
import "./style.css";

function Header() {
  function login(){
    if(Auth) {
      return <button onClick={handleLogout}></button>
    } else {
      <div className='loginForm'>
      <Login />
      </div>
    }
  }
  function handleLogout() {
    try {
      Auth.signOut();
      // Redirect to the login page or a logged-out landing page
    } catch (error) {
      console.log('Error signing out:', error);
  }
}
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light row">
          <a href='/' className="navbar-brand col-sm-5">
            Coding Cheatsheet
          </a>

        </nav>
    </div>
  );
};

export default Header;
