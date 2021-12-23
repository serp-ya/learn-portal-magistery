import { DocumentType } from '@typegoose/typegoose';
import { getSkillsDictionary } from '../../../dictionaries-database/skills-dictionary';
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

const mapSkills = async (skills: DocumentType<SkillsModel>[]) => {
    const skillsDictionary = await getSkillsDictionary();

    const mappedSkills = skills?.map((skill) => {
      const skillRecord = skillsDictionary.records.find(
        ({ id }) => id === skill[ESkillsFieldNames.DictId]
      );
      const { _id, dictId, ...skillData } = skill.toObject();
  
      return {
        ...skillRecord,
        ...skillData,
      };
    });
  
    return mappedSkills;
}

export const getSkillById = async (skillId: string) => {
  const skill = await skillsModel
    .findOne({ [ESkillsFieldNames.DictId]: skillId })
    .populate(populateLectionsOptions);

    if (!skill) {
      return skill;
    }

    const [mappedSkill] = await mapSkills([skill]);

    return mappedSkill;
};

export const getSkills = async () => {
  const skills = await skillsModel.find({}).populate(populateLectionsOptions);
  const mappedSkills = mapSkills(skills);

  return mappedSkills;
};

export const createSkill = async (dictId: string) => {
  await skillsModel.create({
    [ESkillsFieldNames.DictId]: dictId,
    [ESkillsFieldNames.Lections]: [],
  });

  return getSkillById(dictId);
};

export const updateSkill = async (
  skillId: string,
  params: Partial<SkillsModel>
) => await skillsModel.findByIdAndUpdate(skillId, params, { new: true });

export const deleteSkill = async (skillId: string) =>
  await skillsModel.findByIdAndDelete(skillId);
