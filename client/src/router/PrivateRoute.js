import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Load from "../componets/Load";

function PrivateRoute({ children }) {
  const { auth, loading } = useSelector((state) => state.authReducer);
  const token = localStorage.getItem("token");
  return (
    <>
      {loading ? (
        <Load type="spokes" color="black" />
      ) : auth && token ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default PrivateRoute;
