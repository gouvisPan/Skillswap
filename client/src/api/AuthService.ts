import axios from "axios";
import ApiUser from "../model/ApiUser";
import { NewUser } from "../model/auth/NewUser";
import LoginCredentials from "../model/LoginCredentials";
import User from "../model/User";

// const url = `${process.env.SERVER_URL}`;
const url = `/api/v1`;

export const fetchUser = async (
  credentials: LoginCredentials
): Promise<ApiUser | null> => {
  const response = await axios.post<ApiUser>(`${url}/users/login`, credentials);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const createUser = async (user: NewUser): Promise<ApiUser | null> => {
  const response = await axios.post(`${url}/users/register`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.get(`${url}/users/logout`);
  console.log(response);
  return response.data;
};
