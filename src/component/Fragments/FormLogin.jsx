import Button from "../Elements/Button";
import InputElement from "../Elements/Input";
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
      console.log("Login berhasil:", loginResult);
      localStorage.setItem("Authorization", loginResult.data.token);
      localStorage.setItem("Roles", loginResult.data.roles);
      // Update authentication status using Redux
      alert("Login berhasil");

      // Redirect to the home page or the previous protected route
      navigate("/");

      // Store the token in the context
    } catch (error) {
      console.log(loginData);
      console.error("Login gagal:", error);
      const errorMsg = error.toString();
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
      {mError && <p className="text-red-500 mt-3">{mError}</p>}
      <Button children="Login" type="submit" />
      <p className="text-black">
        Don't have account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
