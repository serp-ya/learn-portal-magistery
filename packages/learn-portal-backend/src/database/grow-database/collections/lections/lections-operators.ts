import { LectionsModel, lectionsModel } from './lections-model';
import { ELectionsFieldNames } from './lections-constants';

export const getLections = async (lectionId?: string) => {
    if (lectionId) {
        return await lectionsModel.findById(lectionId);
    }
    return await lectionsModel.find({});
};

export const createLection = async (req: LectionsModel) => (
    await lectionsModel.create({
        [ELectionsFieldNames.Title]: req.title,
        [ELectionsFieldNames.Description]: req.description,
        [ELectionsFieldNames.Video]: req.video,
    })
);

export const updateLection = async (lectionId: string, params: Partial<LectionsModel>) => (
    await lectionsModel.findByIdAndUpdate(lectionId, params, { new: true })
);

export const deleteLection = async (lectionId: string) => (
    await lectionsModel.findByIdAndDelete(lectionId)
);