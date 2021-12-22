import { Router } from "express";
import {
  getProfessionsDictionary,
  getSkillsDictionary,
  PROFESSIONS_DICTIONARY_NAME,
  SKILLS_DICTIONARY_NAME,
} from "@/database/dictionaries-database";
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const dictionariesRoute = Router();

const dictionariesRequests = {
    [PROFESSIONS_DICTIONARY_NAME]: getProfessionsDictionary,
    [SKILLS_DICTIONARY_NAME]: getSkillsDictionary,
};

dictionariesRoute.get(ROUTES_BASE, async (_, res) => {
  res.statusCode = 200;
  res.json({
    dictionaries: [await getProfessionsDictionary(), await getSkillsDictionary()],
  });
});

dictionariesRoute.get(`${ROUTES_BASE}:dictName`, async (req, res) => {
  const { dictName } = req.params;

  try {
    const dictionaryRequest = dictionariesRequests[dictName];

    if (!dictionaryRequest) {
        res.status(EStatusCodes.NotFound);
        res.json({});
    }

    res.statusCode = 200;
    res.json(await dictionaryRequest(dictName));
  } catch (error) {
    res.status(EStatusCodes.NotFound);
    res.json(error);
  }
});
