import * as api from "../../api/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewUser } from "../../model/auth/NewUser";
import LoginCredentials from "../../model/LoginCredentials";
import { dummyUser1,dummyUser2 } from "../../model/data/users";

export const loginDummyUser = createAsyncThunk(
  "dummyuser/login",
  async (_: void, thunkApi) => {
    try {
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
      return await api.fetchUser(credentials);
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/register",
  async (user: NewUser, thunkApi) => {
    try {
      return await api.createUser(user);
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

      if (response.ok) localStorage.removeItem("user");

      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
