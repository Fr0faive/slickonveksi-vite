import { useState } from "react";
import { InputElement } from "../Elements/Input";
import SelectInput from "../Elements/Input/SelectInput";
import Button from "../Elements/Button";

const FormUser = (props) => {
  const { idModal } = props;
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMSuccess("");
    try {
      // Panggil fungsi registerUser dari authService
      await authService.registerUser(user);

      // Registrasi berhasil, Anda dapat menangani navigasi atau menampilkan pesan sukses di sini
      console.log("User berhasil ditambahkan");

      setMSuccess("Registrasi berhasil");

      // Setelah registrasi berhasil, Anda mungkin ingin melakukan navigasi ke halaman login atau halaman lainnya
    } catch (error) {
      // Registrasi gagal, Anda dapat menangani kesalahan di sini
      console.error("Registrasi gagal", error);
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <InputElement
        type="text"
        placeholder="Username"
        name="username"
        labelText="Username"
        onChange={handleChange}
      />
      <InputElement
        type="email"
        placeholder="Email"
        name="email"
        labelText="Email"
        onChange={handleChange}
      />
      <InputElement
        type="password"
        placeholder="Password"
        name="password"
        labelText="Password"
        onChange={handleChange}
      />
      <SelectInput title="roles" onChange={handleChange} />
      <div className="modal-action mt-0">
        <Button onClick={() => document.getElementById(`${idModal}`).close()}>
          Close
        </Button>
        <Button type="submit">Tambahkan</Button>
      </div>
    </form>
  );
};

export default FormUser;
