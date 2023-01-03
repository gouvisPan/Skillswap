import * as api from "../../api/CRUDService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import Skill from "../../model/Skill";

const cookies = new Cookies();

export const createSkill = createAsyncThunk(
  "skills/create",
  async (skill: Skill, thunkApi) => {
    try {
      const response = await api.createSkill(cookies.get("jwt_auth"), skill);

      if (response?.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response);

      return response?.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
