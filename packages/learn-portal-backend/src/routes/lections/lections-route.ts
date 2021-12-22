import { Router } from "express";
import { getLections, LectionsModel } from '@/database/grow-database';
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const lectionsRoute = Router();

lectionsRoute.get<LectionsModel>(ROUTES_BASE, async (_, res) => {
  res.statusCode = 200;
  res.json(await getLections());
});

lectionsRoute.get(`${ROUTES_BASE}:id`, async (req, res) => {
  const { id } = req.params;

  try {
      const lection = await getLections(id);
      res.statusCode = 200;
      res.json(lection);

  } catch (error) {
      res.status(EStatusCodes.InternalError);
      res.json(error);
  }
});
