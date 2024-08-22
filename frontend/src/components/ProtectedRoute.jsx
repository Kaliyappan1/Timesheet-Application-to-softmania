import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("users"); 

  if (!user) {

    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
