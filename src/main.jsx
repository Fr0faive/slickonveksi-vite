import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/public.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/404Page";
import PrivateRoute from "./route/private.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/tentang",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard/*",
    element: <PrivateRoute element={Dashboard} />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} className="font-sans" />
  </React.StrictMode>
);
