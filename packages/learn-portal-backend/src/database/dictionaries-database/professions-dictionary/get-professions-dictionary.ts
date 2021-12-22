import { TProfessionsDictionary } from './professions-dictionary-types';
import professionsDictionary from './professions-dictionary.json';

// emulation of the real request
export const getProfessionsDictionary = async (): Promise<TProfessionsDictionary> => professionsDictionary as TProfessionsDictionary;
