import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TProfession } from "./professions-types";

export const getProfessions = (): Promise<TProfession[]> =>
  growApiRequest<undefined, TProfession[]>(EGrowApiEndpoints.PROFESSION, "GET");
