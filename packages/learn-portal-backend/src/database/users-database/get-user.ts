import { TExternalUser } from "./users-types";
import userAdmin from "./user-admin.json";
import userStudent from "./user.json";
import userTest from "./user-test.json";

// mock of the Users server
const USERS_MOCK: TExternalUser[] = [userAdmin, userStudent, userTest];

export const getUserByEmail = async (
  email: string
): Promise<TExternalUser | undefined> =>
  USERS_MOCK.find(({ email: userEmail }) => email === userEmail);
