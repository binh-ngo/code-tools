import React from 'react';
import Login from '../Login';
import "./style.css";
import { Auth } from "aws-amplify"

function Header() {
function handleLogout() {
  Auth.signOut()
  .then(() => {
    console.log('User signed out');
  })
  .catch(error => {
    console.log('Error signing out', error);
  });
}
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light row">
          <a href='/' className="navbar-brand col-sm-5">
            Coding Cheatsheet
          </a>
          { Auth.signIn ? (
            <a href="/" onClick={handleLogout}>Log Out</a>
          ) : (
            <div className='loginForm'>
            <Login />
            </div>
          )                    
          }
        </nav>
    </div>
  );
};

export default Header;
