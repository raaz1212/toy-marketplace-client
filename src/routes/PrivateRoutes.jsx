import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    toast.error("Please log in to view details.");
    console.log("ok");
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>; //for route not change
};

export default PrivateRoute;
