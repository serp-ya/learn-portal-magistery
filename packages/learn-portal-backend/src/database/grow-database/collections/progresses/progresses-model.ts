import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { growDBConnection } from "../../grow-database";
import { LectionsModel } from "../lections";
import { UserModel } from "../users";
import {
  EProgressFieldNames,
  PROGRESS_COLLECTION_NAME,
} from "./progresses-constants";

const progressModelOptions = {
  existingConnection: growDBConnection,
  schemaOptions: { collection: PROGRESS_COLLECTION_NAME },
};

@modelOptions(progressModelOptions)
export class ProgressModel {
  @prop({ required: true })
  public [EProgressFieldNames.Finished]!: boolean;

  @prop({ required: true })
  public [EProgressFieldNames.LectionId]!: Ref<LectionsModel>;

  @prop({ required: true })
  public [EProgressFieldNames.UserId]!: Ref<UserModel>;
}

export const progressModel = getModelForClass(ProgressModel);
