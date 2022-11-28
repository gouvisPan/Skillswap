import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../model/User";
import { createUser, loginUser, logoutUser } from "../actions/user-actions";

interface userSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  isAuthenticated: boolean;
  error: null | string;
  data: null | User;
}
const user: User = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: userSliceState = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  error: null,
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
        state.data = action.payload;
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
        state.data = action.payload;
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
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice;
