import { createSelector } from "reselect";
import { TSkill } from "../../utils/grow-api/skills";
import { SKILLS_STORE_NAME } from "./skills-constants";
import { TSkillsStore } from "./skills-types";

export const getSkillState = (state): TSkillsStore => state[SKILLS_STORE_NAME];

export const getSkills = createSelector(
  getSkillState,
  (skillState: TSkillsStore): TSkill[] | null => skillState.skills
);
