import React from "react";
import { useContext, useEffect } from "react";
import Login from "../Login/index";
import { AccountContext } from "../../components/User/Accounts.tsx";
import Status from "../User/Status.js";
import "./style.css";

function Header() {
  const { loggedInUser, resetCurrentAuthedUser } = useContext(AccountContext);

  useEffect(() => {
    const checkAuth = async () => {
      await resetCurrentAuthedUser();
    };
    if (!loggedInUser) {
      checkAuth();
    }
  }, [loggedInUser, resetCurrentAuthedUser]);
  return (
    <div className="header">
      <Status />
      <nav className="navbar navbar-expand-lg navbar-light row">
        <a href="/" className="navbar-brand col-sm-5">
          Coding Cheatsheet
        </a>
        <Login />
      </nav>
    </div>
  );
}

export default Header;
