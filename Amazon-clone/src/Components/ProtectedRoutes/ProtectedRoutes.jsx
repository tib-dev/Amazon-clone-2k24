import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider"; // Import the context, not the provider

function ProtectedRoutes({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext); // Use the context to get user

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]); // Add navigate, msg, and redirect as dependencies

  if (!user) {
    return null; // Or you could return a loading spinner or message
  }

  return <>{children}</>; // Fragment to wrap children
}

export default ProtectedRoutes;
