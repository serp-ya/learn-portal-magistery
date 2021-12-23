import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TSkill } from "./skills-types";

export const getSkills = (): Promise<TSkill[]> =>
  growApiRequest<undefined, TSkill[]>(EGrowApiEndpoints.SKILLS, "GET");
