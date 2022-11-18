import { Dispatch } from "react";
import * as api from "../../api/index";
import userSlice from "../reducers/userSlice";

export const getUser = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchUsers;
    dispatch(userSlice.actions.fetchUser(data));
  } catch (error: any) {
    console.log(error.message);
  }
};
