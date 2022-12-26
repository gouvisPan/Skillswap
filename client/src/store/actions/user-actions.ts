import * as api from "../../api/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewUser } from "../../model/auth/NewUser";
import LoginCredentials from "../../model/LoginCredentials";
import { dummyUser1 } from "../../model/data/users";
import Cookies from "universal-cookie";

const cookies = new Cookies();

interface BasicAttributes {
  name: string;
  slogan: string;
  bio: string;
}

export const loginDummyUser = createAsyncThunk(
  "dummyuser/login",
  async (_: void, thunkApi) => {
    try {
      console.log(dummyUser1);
      return dummyUser1;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials: LoginCredentials, thunkApi) => {
    try {
      const response = await api.fetchUser(credentials);

      if (response?.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response);

      return response?.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/register",
  async (user: NewUser, thunkApi) => {
    try {
      const response = await api.createUser(user);
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      console.log(response);

      return response?.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_: void, thunkApi) => {
    try {
      const response = await api.logoutUser();
      console.log(response);
      if (response.data.ok) localStorage.removeItem("user");

      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateMe",
  async (attributes: BasicAttributes, thunkApi) => {
    try {
      const response = await api.updateUser(cookies.get("jwt_auth"), {
        ...attributes,
      });
      console.log(attributes);
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
