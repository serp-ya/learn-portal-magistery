import { EProgressFieldNames, progressModel } from "../progresses";
import { EUsersFields } from "./users-constants";
import { UserModel, usersModel } from "./users-model";

const populateProgressOptions = {
  model: progressModel,
  path: EUsersFields.Progresses,
  select: [
    EProgressFieldNames.Finished,
    EProgressFieldNames.LectionId,
    EProgressFieldNames.UserId,
  ],
};

export const getUsers = async (userId: string) => {
  return await usersModel.findById(userId).populate(populateProgressOptions);
};

export const createUser = async (userId: string, professionId: string) => {
  const { _id } = await usersModel.create({
    [EUsersFields.Id]: userId,
    [EUsersFields.CurrentProfession]: professionId,
    [EUsersFields.SelectedProfession]: professionId,
    [EUsersFields.Progresses]: [],
  });

  return usersModel.findById(_id);
};

export const updateUser = async ({
  _id,
  id,
  ...user
}) => {
  const currentUser = await getUsers(id);

  if (currentUser === undefined) {
    console.log("Can not update user:", JSON.stringify(user));
    return null;
  }

  await usersModel.findByIdAndUpdate(id, user);

  const updatedUser = await getUsers(id);

  return updatedUser;
};

export const deleteUser = async (userId: string): Promise<boolean> => {
  try {
    const res = await usersModel.findByIdAndDelete(userId);
    return true;
  } catch (error) {
    process.stdout.write(`${JSON.stringify(error)}\n`);
    return false;
  }
};
