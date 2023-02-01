import axios, { AxiosResponse } from "axios";
import Skill from "../model/Skill";
import { useAppDispatch } from "../hooks/hooks";

const url = `/api/v1`;

export const createSkill = async (
  token: string,
  skill: Skill
): Promise<AxiosResponse | null> => {
  const response = await axios
    .post<Skill>(
      `${url}/skills/skill`,
      { ...skill },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((err) => {
      throw err;
    });

  return response;
};
