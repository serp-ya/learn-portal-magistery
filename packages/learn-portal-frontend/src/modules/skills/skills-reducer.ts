import { SET_SKILLS } from "./skills-actions";
import { TSkillsStore } from "./skills-types";

const INIT_STATE: TSkillsStore = {
  skills: null,
};

export const skillsReducer = (state = INIT_STATE, action): TSkillsStore => {
  switch (action.type) {
    case SET_SKILLS: {
      return {
        ...state,
        skills: Array.isArray(state.skills)
          ? [...state.skills, action.payload]
          : [action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
