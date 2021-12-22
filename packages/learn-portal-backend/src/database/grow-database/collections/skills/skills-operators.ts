import { ELectionsFieldNames, lectionsModel } from "../lections";
import { SkillsModel, skillsModel } from "./skills-model";
import { ESkillsFieldNames } from "./skills-constants";

const populateLectionsOptions = {
  model: lectionsModel,
  path: ESkillsFieldNames.Lections,
  select: [
    // "_id",
    ELectionsFieldNames.Description,
    ELectionsFieldNames.Title,
    ELectionsFieldNames.Video,
  ],
};

export const getSkills = async (lectionId?: string) => {
  if (lectionId) {
    return await skillsModel
      .findById(lectionId)
      .populate(populateLectionsOptions);
  }
  return await skillsModel.find({}).populate(populateLectionsOptions);
};

export const createSkill = async (req: SkillsModel) => {
  const { _id } = await skillsModel.create({
    [ESkillsFieldNames.Lections]: req.lections,
  });

  return skillsModel.findById(_id).populate(populateLectionsOptions);
};

export const updateSkill = async (
  skillId: string,
  params: Partial<SkillsModel>
) => await skillsModel.findByIdAndUpdate(skillId, params, { new: true });

export const deleteSkill = async (skillId: string) =>
  await skillsModel.findByIdAndDelete(skillId);
