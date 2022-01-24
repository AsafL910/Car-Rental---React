import React from "react";
import { Navigate } from "react-router";
import UseAuth from "./UseAuth.js";

const RequireAuth = ({ children }) => {
  const { authed } = UseAuth();
  return authed ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
