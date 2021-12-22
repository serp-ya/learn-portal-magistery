import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { growDBConnection } from '../../grow-database';
import { LECTIONS_COLLECTION_NAME, ELectionsFieldNames } from './lections-constants';

const lectionsModelOptions = {
    existingConnection: growDBConnection,
    schemaOptions: { collection: LECTIONS_COLLECTION_NAME },
};

@modelOptions(lectionsModelOptions)
export class LectionsModel {
    @prop({ required: true })
    public [ELectionsFieldNames.Title]!: string;

    @prop({ required: true })
    public [ELectionsFieldNames.Description]!: string;

    @prop({ required: true })
    public [ELectionsFieldNames.Video]: string;
}

export const lectionsModel = getModelForClass(LectionsModel);