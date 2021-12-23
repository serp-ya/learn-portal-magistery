import { Router } from "express";
import { getProfessionsDictionary } from "@/database/dictionaries-database/professions-dictionary";
import { getSkillById } from "@/database/grow-database";
import { ROUTES_BASE } from "../routes-constants";

export const professionsRoute = Router();

const populateProfession = async (profession) => {
  const minimumSkills = await Promise.all(
    profession.minimumSkills.map((id) => getSkillById(id))
  );
  const additionalSkills = await Promise.all(
    profession.additionalSkills.map((id) => getSkillById(id))
  );
  return { ...profession, minimumSkills, additionalSkills };
};

professionsRoute.get(ROUTES_BASE, async (_, res) => {
  try {
    const professionsDictionary = await getProfessionsDictionary();
    const professions = [];

    for (const profession of professionsDictionary.records) {
      const populatedProfession = await populateProfession(profession);

      // @ts-ignore
      professions.push(populatedProfession);
    }

    res.statusCode = 200;
    res.json(professions);
  } catch (error) {
    res.statusCode = 502;
    res.json(JSON.stringify(error));
  }
});

professionsRoute.get(`${ROUTES_BASE}:id`, async (req, res) => {
  const { id } = req.params;

  try {
    const professionsDictionary = await getProfessionsDictionary();
    const currentProfession = professionsDictionary.records.find((profession) => profession.id === id);
    const populatedProfession = await populateProfession(currentProfession);

    res.statusCode = 200;
    res.json(populatedProfession);
  } catch (error) {
    res.statusCode = 502;
    res.json(JSON.stringify(error));
  }
});