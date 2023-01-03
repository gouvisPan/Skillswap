import axios, { AxiosResponse } from "axios";
import Skill from "../model/Skill";

const url = `/api/v1`;

export const createSkill = async (
  token: string,
  skill: Skill
): Promise<AxiosResponse | null> => {
  console.log({ ...skill });
  const response = await axios.post<Skill>(
    `${url}/skills/skill`,
    { ...skill },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
