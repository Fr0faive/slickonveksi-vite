import Button from "../Elements/Button";
import InputElement from "../Elements/Input";
import authService from "../../services/auth.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      // Update authentication status using Redux

      // Redirect to the home page or the previous protected route
      navigate("/");

      // Store the token in the context
    } catch (error) {
      console.log(loginData);
      console.error("Login gagal:", error);
      setMError("Login gagal. Periksa kembali username dan password Anda.");
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
    </form>
  );
};

export default FormLogin;
