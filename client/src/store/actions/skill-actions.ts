import * as api from "../../api/CRUDService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import Skill from "../../model/Skill";
import { useAppDispatch } from "../../hooks/hooks";
import { uiActions } from "../reducers/ui-slice";
import { userActions } from "../reducers/userSlice";

const cookies = new Cookies();

export const createSkill = createAsyncThunk(
  "skills/create",
  async (skill: Skill, thunkApi) => {
    try {
      const response = await api.createSkill(cookies.get("jwt_auth"), skill);

      thunkApi.dispatch(uiActions.offSkillEdit());

      return response?.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
