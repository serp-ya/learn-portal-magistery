import { TSkillsDictionary } from './skills-dictionary-types';
import skillsDictionary from './skills-dictionary.json';

// emulation of the real request
export const getSkillsDictionary = async (): Promise<TSkillsDictionary> => skillsDictionary as TSkillsDictionary;
