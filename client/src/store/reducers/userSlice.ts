import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../model/User";
import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../actions/user-actions";
import Cookies from "universal-cookie";

const cookie = new Cookies();

interface userSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  isAuthenticated: boolean;
  error: null | string;
  token: string;
  data: null | User;
}
let user: User = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: userSliceState = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  error: null,
  token: "",
  // data: dummyUser1
  data: user ? user : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.data = action.payload.data.user;
        state.token = cookie.get("jwt_auth");
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.data = action.payload.data.user;
        state.token = cookie.get("jwt_auth");
      })
      .addCase(createUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = false;
        state.data = null;
      })
      .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      })
      // .addCase(
      //   loginDummyUser.fulfilled,
      //   (state, action: PayloadAction<any>) => {
      //     state.data = action.payload;
      //   }
      // )
      .addCase(updateUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.data = action.payload.data.updatedUser;
      })
      .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice;
