import { TLection } from "../lections";

export type TSkill = {
  id: string;
  name: string;
  description: string;
  depricated: boolean;
  lections: TLection[];
};
