import { TSkill, getSkills } from "../../utils/grow-api/skills";

export const SET_SKILLS = "SET_SKILLS";
export const setSkill = (skill: TSkill) => ({
  type: SET_SKILLS,
  payload: skill,
});

export const fetchSkills = () => async (dispatch, getState) => {
  const skills = await getSkills();

  if (skills) {
    skills.forEach((skill) => dispatch(setSkill(skill)));
  }
};
