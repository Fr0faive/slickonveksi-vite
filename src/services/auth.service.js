import axios from "axios";

export const registerUser = (data, callback) => {
    axios
        .post("https://652e9a430b8d8ddac0b1a9a0.mockapi.io/api/users", data)
        .then((res) => {
            console.log(res);
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}