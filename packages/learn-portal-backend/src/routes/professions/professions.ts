import { Router } from "express";
import { getProfessionsDictionary } from "@/database/dictionaries-database/professions-dictionary";
import { ROUTES_BASE } from "../routes-constants";

export const professionsRoute = Router();

professionsRoute.get(ROUTES_BASE, async (_, res) => {
  res.statusCode = 200;
  res.json({ professions: await getProfessionsDictionary() });
});
