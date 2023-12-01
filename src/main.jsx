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
import PrivateRoutes from "./route/private.route";
import IsAuth from "./route/isAuthenticated";

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
    path: "/auth",
    element: <IsAuth />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomePage />}>
//       <Route path="products" element={<ProductPage />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="tentang" element={<AboutPage />} />
//       <Route path="login" element={<LoginPage />} />
//       <Route path="register" element={<RegisterPage />} />
//       <Route element={<AuthRequired />}>
//         <Route path="dashboard" element={<Dashboard />} />
//       </Route>
//       <Route path="*" element={<NotFoundPage />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} className="font-sans" />
  </React.StrictMode>
);
