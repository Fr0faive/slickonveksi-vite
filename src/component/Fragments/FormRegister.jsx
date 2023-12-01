import { useState } from "react";
import Button from "../Elements/Button";
import InputElement from "../Elements/Input";
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [mSuccess, setMSuccess] = useState(null);
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    setMSuccess("");
    try {
      // Panggil fungsi registerUser dari authService
      await authService.registerUser(registerData);

      // Registrasi berhasil, Anda dapat menangani navigasi atau menampilkan pesan sukses di sini
      console.log("Registrasi berhasil");

      setMSuccess("Registrasi berhasil");

      // Setelah registrasi berhasil, Anda mungkin ingin melakukan navigasi ke halaman login atau halaman lainnya
    } catch (error) {
      // Registrasi gagal, Anda dapat menangani kesalahan di sini
      console.error("Registrasi gagal", error);
    }
  };
  return (
    <form onSubmit={handleRegister} method="POST">
      <InputElement
        name="username"
        labelText="Username"
        type="text"
        placeholder="Enter your username"
        onChange={handleChange}
      />
      <InputElement
        name="email"
        labelText="Email"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <InputElement
        name="password"
        labelText="Password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button children="SignUp" type="submit" />
      {mSuccess && <p className="text-green-500 my-3">{mSuccess}</p>}
      <p className="text-black">
        Already have account?{" "}
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
