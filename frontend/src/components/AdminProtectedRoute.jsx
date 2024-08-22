import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("admin"); 

  if (!user) {

    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminProtectedRoute;
