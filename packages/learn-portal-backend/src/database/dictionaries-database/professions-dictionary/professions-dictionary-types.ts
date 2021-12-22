import { EEmployeeLevels } from '@/constants';
import { TDictionary } from '../dictionaries-types';

export type TProfessionsDictionaryReords = {
    id: string;
    name: string;
    description: string;
    level: EEmployeeLevels;
    minimumSkills: string[];
    additionalSkills: string[];
    depricated: boolean;
};

export type TProfessionsDictionary = TDictionary<TProfessionsDictionaryReords>;
