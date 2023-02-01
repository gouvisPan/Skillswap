import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/hooks";
import Skill from "../../model/Skill";
import { createSkill } from "../actions/skill-actions";
import uiSlice from "./ui-slice";

interface skillSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | string;
  skills: Skill[];
}

const initialState: skillSliceState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  skills: [],
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    loadInitials(state, action: PayloadAction<Skill[]>) {
      state.skills = action.payload;
    },
  },
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
