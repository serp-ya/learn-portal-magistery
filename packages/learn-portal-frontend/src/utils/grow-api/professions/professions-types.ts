import { TSkill } from '../skills';

export type TProfession = {
  id: string;
  name: string;
  description: string;
  level: string;
  minimumSkills: TSkill[];
  additionalSkills: TSkill[];
  depricated: boolean;
};
