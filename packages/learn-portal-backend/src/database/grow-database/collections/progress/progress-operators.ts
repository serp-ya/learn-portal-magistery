import { ELectionsFieldNames, lectionsModel } from "../lections";
import { EUsersFields, usersModel } from "../users";
import { ProgressModel, progressModel } from "./progress-model";
import { EProgressFieldNames } from "./progress-constants";

const populateLectionsOptions = {
  model: lectionsModel,
  path: EProgressFieldNames.LectionId,
  select: [
    ELectionsFieldNames.Description,
    ELectionsFieldNames.Title,
    ELectionsFieldNames.Video,
  ],
};

const populateUserOptions = {
  model: usersModel,
  path: EProgressFieldNames.UserId,
  select: [
    EUsersFields.CurrentProfession,
    EUsersFields.Progresses,
    EUsersFields.SelectedProfession,
  ],
};

export const getProgress = async (progressId: string) => {
  if (progressId) {
    return await progressModel
      .findById(progressId)
      .populate(populateLectionsOptions)
      .populate(populateUserOptions);
  }
  return undefined;
};

export const getUserProgress = async (userId: string) => {
  return await progressModel
    .find({ [EProgressFieldNames.UserId]: userId })
    .populate(populateLectionsOptions)
    .populate(populateUserOptions);
};

export const createProgress = async (req: ProgressModel) => {
  const { _id } = await progressModel.create({
    [EProgressFieldNames.Finished]: false,
    [EProgressFieldNames.LectionId]: req.lectionId,
    [EProgressFieldNames.UserId]: req.userId,
  });

  return progressModel
    .findById(_id)
    .populate(populateLectionsOptions)
    .populate(populateUserOptions);
};

export const updateProgress = async (progressId: string, isFinished: boolean) =>
  await progressModel.findByIdAndUpdate(
    progressId,
    { [EProgressFieldNames.Finished]: isFinished },
    { new: true }
  );
