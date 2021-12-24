import {
  TUser,
  getCurrentUser,
  putCurrentUser,
} from "../../utils/grow-api/users";
import { getCurrentUser as getCurrentUserSelector } from "./user-selectors";

export const SET_USER = "SET_USER";
export const setUser = (user: TUser) => ({
  type: SET_USER,
  payload: user,
});

export const fetchUser = () => async (dispatch, getState) => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    dispatch(setUser(currentUser));
  }
};

export const updateCurrentUser =
  (selectedProfession: string) => async (dispatch, getState) => {
    const state = getState();
    const currentUser = getCurrentUserSelector(state);

    if (currentUser) {
      const updatedUser = await putCurrentUser(currentUser, {
        selectedProfession,
      });

      dispatch(setUser(updatedUser));
    }
  };
