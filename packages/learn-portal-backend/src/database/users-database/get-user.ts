import { TUser } from "./users-types";
import userAdmin from "./user-admin.json";
import userStudent from "./user.json";

// mock of the Users server
const USERS_MOCK: TUser[] = [userAdmin, userStudent];

export const getUserByEmail = async (
  email: string
): Promise<TUser | undefined> =>
  USERS_MOCK.find(({ email: userEmail }) => email === userEmail);
