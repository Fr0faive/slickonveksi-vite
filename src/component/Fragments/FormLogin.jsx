import Button from "../Elements/Button";
import { InputElement } from "../Elements/Input";
import authService from "../../services/auth.service";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [mError, setMError] = useState(null);
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    setMError("");
    console.log(e.target.username.value);
    try {
      const loginResult = await authService.loginUser(loginData);
      if (loginResult) {
        localStorage.setItem("Authorization", loginResult.data.token);
        localStorage.setItem("Roles", loginResult.data.roles);
        // Update authentication status using Redux
        alert("Login berhasil");

        // Redirect to the home page or the previous protected route
        window.location.reload();

        // Store the token in the context
      } else {
        alert("Login gagal");
      }
    } catch (error) {
      console.log(loginData);
      console.error("Login gagal:", error.errors);
      const errorMsg = error.errors;
      setMError(errorMsg);
    }
  };

  return (
    <form onSubmit={handleLogin} method="POST">
      <InputElement
        name="username"
        labelText="Username/Email"
        type="text"
        placeholder="Enter your username/email"
        onChange={handleChange}
      />

      <InputElement
        name="password"
        labelText="Password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {mError && (
        <div role="alert" className="alert alert-error mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{mError}</span>
        </div>
      )}
      <Button children="Login" type="submit" />
      <p className="text-black">
        Don't have account?{" "}
        <Link to="/auth/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
