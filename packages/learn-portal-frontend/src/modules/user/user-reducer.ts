import { SET_USER } from "./user-actions";
import { TUserStore } from "./users-types";

const INIT_STATE: TUserStore = {
  currentUser: null,
};

export const userReducer = (state = INIT_STATE, action): TUserStore => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
