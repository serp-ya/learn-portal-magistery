import { createSelector } from "reselect";
import { TUser } from "../../utils/grow-api/users";
import { USER_STORE_NAME } from "./user-constants";
import { TUserStore } from "./users-types";

export const getUserState = (state): TUserStore => state[USER_STORE_NAME];

export const getCurrentUser = createSelector(
  getUserState,
  (userState: TUserStore): TUser | null => userState.currentUser
);
