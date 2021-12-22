import { TDictionary } from '../dictionaries-types';

export type TSkillsDictionaryReords = {
    id: string;
    name: string;
    description: string;
    depricated: boolean;
};

export type TSkillsDictionary = TDictionary<TSkillsDictionaryReords>;
