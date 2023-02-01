import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    profileIsLabel: true,
    isSkillEditing: false,
    isFetching: false,
  },
  reducers: {
    toggleEditProfile(state) {
      state.profileIsLabel = !state.profileIsLabel;
    },
    onSkillEdit(state) {
      state.isSkillEditing = true;
    },
    offSkillEdit(state) {
      state.isSkillEditing = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
