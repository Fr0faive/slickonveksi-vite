import axios from "axios";

const URL = "http://localhost:5000";

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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllProducts = (callback) => {
  axios
    .get(`${URL}/api/products`)
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getProducts, getAllProducts, addProduct };
