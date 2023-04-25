import React from 'react';
import Login from '../Login';
import "./style.css";

function Header() {

  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light row">
          <a href='/' className="navbar-brand col-sm-5">
            Coding Cheatsheet
          </a>
              <Login />
        </nav>
    </div>
  );
};

export default Header;
