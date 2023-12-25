import axios from "axios";

const URL = "https://api-2.faikarmocht.my.id";

const token = localStorage.getItem("Authorization");

const addProduct = (data) => {
  axios
    .post(`${URL}/api/products`, data, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getProductsById = (id, callback) => {
  axios
    .get(`${URL}/api/products/${id}`)
    .then((res) => {
      console.log(res.data.data);
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateProduct = (id, data) => {
  axios
    .put(`${URL}/api/products/${id}`, data, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllProducts = (callback) => {
  axios
    .get(`${URL}/api/products`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteProduct = (id) => {
  axios
    .delete(`${URL}/api/products/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getAllProducts,
  addProduct,
  getProductsById,
  updateProduct,
  deleteProduct,
};
