import { SET_PROFESSION } from "./professions-actions";
import { TProfessionsStore } from "./professions-types";

const INIT_STATE: TProfessionsStore = {
  professions: null,
};

export const professionsReducer = (
  state = INIT_STATE,
  action
): TProfessionsStore => {
  switch (action.type) {
    case SET_PROFESSION: {
      return {
        ...state,
        professions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
