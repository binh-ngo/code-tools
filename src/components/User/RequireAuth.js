import React from "react";
import { useContext } from "react";
import { AccountContext } from "./Accounts";
import { useLocation } from "react-router-dom";
import Login from "../Login/index";

const RequireAuth = ({ children }) => {
  const { loggedInUser } = useContext(AccountContext);

  let location = useLocation();

  if (!loggedInUser) {
    console.log(`status: not authed, redirecting to login...`);
    return <Login from={location.pathname} />;
  }

  return children;
};

export default RequireAuth;