import { Router } from "express";
import { getSkillsDictionary } from "@/database/dictionaries-database";
import { getSkills } from "@/database/grow-database";
import { ROUTES_BASE } from "../routes-constants";

export const skillsRoute = Router();

skillsRoute.get(ROUTES_BASE, async (_, res) => {
  const skillsDictionary = await getSkillsDictionary();
  const skills = await getSkills('61c2bf7c6bdff3f76a4acbd1');

  console.log('#'.repeat(25));
  console.log('skillsDictionary', typeof skillsDictionary, skillsDictionary);
  console.log('skills', typeof skills, skills);
  console.log('#'.repeat(25));

  res.statusCode = 200;
  res.json({ skills });
});

// skillsRoute.get(`${ROUTES_BASE}:skillName`, async (req, res) => {
//   const { skillName } = req.params;
//   const skills = await getSkillsDictionary();

//   try {
//     const dictionaryRequest = skills[dictName];

//     if (!dictionaryRequest) {
//         res.status(EStatusCodes.NotFound);
//         res.json({});
//     }

//     res.statusCode = 200;
//     res.json(await dictionaryRequest(dictName));
//   } catch (error) {
//     res.status(EStatusCodes.NotFound);
//     res.json(error);
//   }
// });