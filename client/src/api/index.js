import axios from "axios";

const url = "http://localhost:3000/api/v1";

export const fetchUser = axios.get(`${url}/users/login`, {
    "e-mail" : "test1@gmail.com",
    "password" : "11111"
});

export const createUser = axios.post(`${url}/users/register`);