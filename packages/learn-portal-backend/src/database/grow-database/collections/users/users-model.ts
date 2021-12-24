import { getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { growDBConnection } from '../../grow-database';
import { ProgressModel } from '../progresses';
import { EUsersFields, USERS_COLLECTION_NAME } from './users-constants';

const usersModelOptions = {
    existingConnection: growDBConnection,
    schemaOptions: { collection: USERS_COLLECTION_NAME },
};

@modelOptions(usersModelOptions)
export class UserModel {
    @prop({ required: true })
    public [EUsersFields.Id]!: string;

    @prop({ required: true })
    public [EUsersFields.CurrentProfession]!: string;
    
    @prop({ required: true })
    public [EUsersFields.SelectedProfession]!: string;
    
    @prop({ required: true })
    public [EUsersFields.Progresses]!: Ref<ProgressModel>[];
}

export const usersModel = getModelForClass(UserModel);