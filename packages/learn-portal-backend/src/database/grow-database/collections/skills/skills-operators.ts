import { ELectionsFieldNames, lectionsModel } from "../lections";
import { SkillsModel, skillsModel } from "./skills-model";
import { ESkillsFieldNames } from "./skills-constants";

const populateLectionsOptions = {
  model: lectionsModel,
  path: ESkillsFieldNames.Lections,
  select: [
    ELectionsFieldNames.Description,
    ELectionsFieldNames.Title,
    ELectionsFieldNames.Video,
  ],
};

export const getSkillById = async (skillId?: string) => {
  return await skillsModel
    .findById(skillId)
    .populate(populateLectionsOptions);
};

export const getSkills = async (skillId?: string) => {
  if (skillId) {
    return await getSkillById(skillId);
  }
  return await skillsModel.find({}).populate(populateLectionsOptions);
};

export const createSkill = async (req: SkillsModel) => {
  await skillsModel.create({
    [ESkillsFieldNames.Id]: req._id,
    [ESkillsFieldNames.Lections]: req.lections,
  });

  return skillsModel.findById(req._id).populate(populateLectionsOptions);
};

export const updateSkill = async (
  skillId: string,
  params: Partial<SkillsModel>
) => await skillsModel.findByIdAndUpdate(skillId, params, { new: true });

export const deleteSkill = async (skillId: string) =>
  await skillsModel.findByIdAndDelete(skillId);
