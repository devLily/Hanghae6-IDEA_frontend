import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: "http://13.124.99.118",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `Bearer ${getCookie("user")}`,
  },
  withCredentials: true,
});

export default instance;
