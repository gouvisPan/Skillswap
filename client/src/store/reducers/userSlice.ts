import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/usersActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    // id: 0,
    // name: "User",
    // myMentorships: [],
    // myMenteeships: [],
    // mySkills: [],
    // sp: 0,
  },
  reducers: {
    // updateUser(state, action) {
    //   state.id = action.payload.id;
    //   state.name = action.payload.name;
    //   state.myMentorships = action.payload.myMentorships;
    //   state.myMenteeships = action.payload.myMenteeships;
    //   state.mySkills = action.payload.mySkills;
    // },
    updateName(state, action) {},
    updateSp(state, action) {},
    fetchUser(state, action) {
      getUser();
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
