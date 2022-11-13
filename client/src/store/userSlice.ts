import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    name: "User",
    myLearnings: [],
    mySkills: [],
    sp: 0,
  },
  reducers: {
    updateUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.myLearnings = action.payload.myLearnings;
      state.mySkills = action.payload.mySkills;
    },
    updateName(state, action) {},
    updateSp(state, action) {},
  },
});

export const userActions = userSlice.actions;

export default userSlice;
