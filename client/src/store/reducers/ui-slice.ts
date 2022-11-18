import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    profileIsLabel: true,
  },
  reducers: {
    toggleEditProfile(state) {
      state.profileIsLabel = !state.profileIsLabel;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
