import { EProgressFieldNames, progressModel } from '../progress';
import { EUsersFields } from "./users-constants";
import { usersModel } from "./users-model";

const populateProgressOptions = {
  model: progressModel,
  path: EUsersFields.Progresses,
  select: [
    EProgressFieldNames.Finished,
    EProgressFieldNames.LectionId,
    EProgressFieldNames.UserId,
  ],
};

export const getUsers = async (userId?: string) => {
  if (userId) {
    return await usersModel
      .findById(userId)
      .populate(populateProgressOptions);
  }
  return await usersModel.find({}).populate(populateProgressOptions);
}

export const createUser = async (
  professionId: string,
  text: string
) => {
  const { _id } = await usersModel.create({
    [EUsersFields.CurrentProfession]: professionId,
    [EUsersFields.SelectedProfession]: professionId,
    [EUsersFields.Progresses]: [],
  });

  return usersModel.findById(_id);
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