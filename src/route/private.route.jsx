// PrivateRoute.js

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import authService from "../services/auth.service";

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        authService.isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
