import type { AppDispatch } from "../../store/reducers";
import * as api from "../../api/index";
import userSlice from "../reducers/userSlice";
import User from "../../model/User";
import { dummyUser } from "../../model/data/users";
import { Action } from "@remix-run/router";

export const fetchUser = (dispatch: AppDispatch) => {
  console.log(dummyUser);
  dispatch(userSlice.actions.updateUser(dummyUser));

  return userSlice.actions.updateUser(dummyUser);
  // try {
  //   // const { data } = await api.fetchUser;
  //   // console.log(data);
  
  // } catch (error: any) {
  //   console.log(error.message);
  // }
};

// export const createUser = () => async (dispatch: AppDispatch) => {
//   try {
//     const { resporse } = await api.fetchUsers;
//     dispatch(userSlice.actions.fetchUser(data));

//   } catch (error: any) {
//     console.log(error.message);
//   }
// };
