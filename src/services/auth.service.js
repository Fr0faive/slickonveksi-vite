import axios from "axios";

const API_URL = "http://localhost:5000"; // Gantilah dengan URL API sesuai kebutuhan
const token = localStorage.getItem("Authorization");

const loginUser = async (loginData) => {
  try {
    // Panggil API untuk login menggunakan Axios
    const response = await axios.post(`${API_URL}/api/users/login`, loginData);

    // Mengembalikan respons dari server (misalnya, token atau informasi lainnya)
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses login
    throw error.response ? error.response.data : error.message;
  }
};

const registerUser = async (registerData) => {
  try {
    // Panggil API untuk register menggunakan Axios
    await axios.post(`${API_URL}/api/users`, registerData);
  } catch (error) {
    // Menghandle kesalahan selama proses register
    throw error.response ? error.response.data : error.message;
  }
};

const logoutUser = async () => {
  try {
    // Panggil API untuk logout menggunakan Axios

    if (!token) {
      throw new Error("Token not found");
    }

    // Panggil API untuk logout dengan menyertakan token dalam header Authorization
    await axios.delete(`${API_URL}/api/users/logout`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    // Hapus token dari localStorage
    localStorage.removeItem("Authorization");
    localStorage.removeItem("Roles");

    console.log("Logout berhasil");
  } catch (error) {
    // Menghandle kesalahan selama proses logout
    throw error.response ? error.response.data : error.message;
  }
};

const getUserData = async () => {
  try {
    // Panggil API untuk mendapatkan data user menggunakan Axios
    const response = await axios.get(`${API_URL}/api/users/current`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    if (!token) {
      throw new Error("Token not found");
    }
    return response.data;
  } catch (error) {
    // Menghandle kesalahan selama proses mendapatkan data user
    throw error.response ? error.response.data : error.message;
  }
};

const isAuthenticated = () => {
  const token = getToken;
  return !!token; // Mengembalikan true jika token ada
};
export default {
  loginUser,
  registerUser,
  logoutUser,
  isAuthenticated,
  getUserData,
};
