import React from "react";
import { Navigate } from "react-router-dom";

// Simple admin auth (replace with real auth in production)
const isAdmin = () => {
  return localStorage.getItem("admin-auth") === "true";
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/admin-login" replace />;
  }
  return <>{children}</>;
};

export default AdminRoute;
