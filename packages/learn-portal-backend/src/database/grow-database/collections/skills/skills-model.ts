import { getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { growDBConnection } from '../../grow-database';
import { LectionsModel } from '../lections';
import { ESkillsFieldNames, SKILLS_COLLECTION_NAME } from './skills-constants';

const skillsModelOptions = {
    existingConnection: growDBConnection,
    schemaOptions: { collection: SKILLS_COLLECTION_NAME },
};

@modelOptions(skillsModelOptions)
export class SkillsModel {
    @prop({ required: true })
    public [ESkillsFieldNames.Lections]!: Ref<LectionsModel>[];

}

export const skillsModel = getModelForClass(SkillsModel);