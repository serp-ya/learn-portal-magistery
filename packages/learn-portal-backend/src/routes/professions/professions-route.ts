import { Router } from "express";
import { getProfessionsDictionary } from "@/database/dictionaries-database/professions-dictionary";
import { getSkillById } from "@/database/grow-database";
import { ROUTES_BASE } from "../routes-constants";

export const professionsRoute = Router();

professionsRoute.get(ROUTES_BASE, async (_, res) => {
  try {
    const professionsDictionary = await getProfessionsDictionary();
    const professions = [];

    for (const profession of professionsDictionary.records) {
      const minimumSkills = await Promise.all(
        profession.minimumSkills.map((id) => getSkillById(id))
      );
      const additionalSkills = await Promise.all(
        profession.additionalSkills.map((id) => getSkillById(id))
      );

      // @ts-ignore
      professions.push({ ...profession, minimumSkills, additionalSkills });
    }

    res.statusCode = 200;
    res.json(professions);
  } catch (error) {
    res.statusCode = 502;
    res.json(JSON.stringify(error));
  }
});
