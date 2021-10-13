import axios from "axios";

const instance = axios.create({
    baseURL: "http://13.124.99.118",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
    }
});

export default instance;