import { progressModel } from "./progresses-model";
import { EProgressFieldNames } from "./progresses-constants";

export const getProgress = async (userId: string, lectionId: string) =>
  await progressModel.findOne({
    [EProgressFieldNames.LectionId]: lectionId,
    [EProgressFieldNames.UserId]: userId,
  });

export const getUserProgress = async (userId: string) =>
  await progressModel.find({ [EProgressFieldNames.UserId]: userId });

export const createProgress = async (userId: string, lectionId: string) => {
  const { _id } = await progressModel.create({
    [EProgressFieldNames.Finished]: false,
    [EProgressFieldNames.LectionId]: lectionId,
    [EProgressFieldNames.UserId]: userId,
  });

  return progressModel.findById(_id);
};

export const updateProgress = async (
  userId: string,
  lectionId: string,
  isFinished?: boolean
) => {
  const currentProgress = await getProgress(userId, lectionId);

  if (currentProgress) {
    await currentProgress.updateOne({
      [EProgressFieldNames.Finished]:
        typeof isFinished === "undefined"
          ? !currentProgress[EProgressFieldNames.Finished]
          : isFinished,
    });
    return getProgress(userId, lectionId);
  }

  return await createProgress(userId, lectionId);
};
