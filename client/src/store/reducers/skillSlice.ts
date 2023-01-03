import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Skill from "../../model/User";
import { createSkill } from "../actions/skill-actions";

interface userSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  skills: Skill[];
}

const initialState: userSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  skills: [],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSkill.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skills.push(action.payload);
      })
      .addCase(createSkill.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //   .addCase(createUser.pending, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = true;
    //     state.data = action.payload.data.user;
    //     state.token = cookie.get("jwt_auth");
    //   })
    //   .addCase(createUser.rejected, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     state.data = null;
    //   })
    //   .addCase(logoutUser.pending, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(logoutUser.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.isAuthenticated = false;
    //     state.data = null;
    //   })
    //   .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     state.data = null;
    //   })
    //   // .addCase(
    //   //   loginDummyUser.fulfilled,
    //   //   (state, action: PayloadAction<any>) => {
    //   //     state.data = action.payload;
    //   //   }
    //   // )
    //   .addCase(updateUser.pending, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.isAuthenticated = true;
    //     state.data = action.payload.data.updatedUser;
    //   })
    //   .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     state.data = null;
    //   });
  },
});

export const userActions = skillSlice.actions;

export default skillSlice;
