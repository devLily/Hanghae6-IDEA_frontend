import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
  baseURL: "http://13.124.99.118",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: true,
});

export default instance;
=======
    baseURL: "http://13.124.99.118",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
    }
});

export default instance;
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
