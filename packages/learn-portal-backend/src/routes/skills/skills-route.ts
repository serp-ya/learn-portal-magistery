import { Router } from "express";
import { getSkillsDictionary } from "@/database/dictionaries-database";
import {
  getSkillById,
  getSkills,
  createSkill,
} from "@/database/grow-database";
import { ROUTES_BASE } from "../routes-constants";

export const skillsRoute = Router();

skillsRoute.get(ROUTES_BASE, async (_, res) => {
  try {
    const skillsDictionary = await getSkillsDictionary();
    for (const skill of skillsDictionary.records) {
      const growSkill = await getSkillById(skill.id);

      if (!growSkill) {
        await createSkill(skill.id);
      }
    }

    const result = await getSkills();

    res.statusCode = 200;
    res.json(result);
  } catch (error) {
    res.statusCode = 502;
    res.json(JSON.stringify(error));
  }
});
