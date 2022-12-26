import axios, { AxiosResponse } from "axios";
import ApiUser from "../model/ApiUser";
import { NewUser } from "../model/auth/NewUser";
import LoginCredentials from "../model/LoginCredentials";

// const url = `${process.env.SERVER_URL}`;
const url = `/api/v1`;

export const fetchUser = async (
  credentials: LoginCredentials
): Promise<AxiosResponse | null> => {
  const response = await axios.post<ApiUser>(
    `${url}/users/signin`,
    credentials,

    { withCredentials: true }
  );
  return response;
};

export const createUser = async (
  user: NewUser
): Promise<AxiosResponse | null> => {
  const response = await axios.post(`${url}/users/signup`, user, {
    withCredentials: true,
  });
  return response;
};

export const logoutUser = async () => {
  const response = await axios.get(`${url}/users/logout`);

  return response;
};

export const updateUser = async (token: string, fieldsToUpdate: any) => {
  const response = await axios.patch(
    `${url}/users/updateMe`,
    {
      name: fieldsToUpdate.name,
      bio: fieldsToUpdate.bio,
      slogan: fieldsToUpdate.slogan,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
