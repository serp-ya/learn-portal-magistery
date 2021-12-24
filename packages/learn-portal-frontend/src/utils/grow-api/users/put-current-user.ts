import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TUser } from "./users-types";

export const putCurrentUser = (
  user: TUser,
  data: Partial<TUser>
): Promise<TUser> =>
  growApiRequest<TUser, TUser>(EGrowApiEndpoints.CURRENT_USER, "PUT", {
    ...user,
    ...data,
  });
