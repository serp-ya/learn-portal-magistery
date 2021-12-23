import { createSelector } from "reselect";
import { TProfession } from "../../utils/grow-api/professions";
import { PROFESSIONS_STORE_NAME } from "./professions-constants";
import { TProfessionsStore } from "./professions-types";

export const getProfessionsState = (state): TProfessionsStore =>
  state[PROFESSIONS_STORE_NAME];

export const getProfessions = createSelector(
  getProfessionsState,
  (professionsState: TProfessionsStore): TProfession[] | null =>
    professionsState.professions
);
