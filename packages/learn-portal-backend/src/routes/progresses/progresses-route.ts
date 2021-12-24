import { Router } from "express";
import {
  getLections,
  getUsers,
  getUserProgress,
  getProgress,
  updateProgress,
} from "@/database/grow-database";
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const progressesRoute = Router();

progressesRoute.get(`${ROUTES_BASE}:userId`, async (req, res) => {
  const { userId } = req.params;

  try {
    const userProgresses = await getUserProgress(userId);

    console.log('#'.repeat(25));
    console.log('userId', typeof userId, userId);
    console.log('userProgresses', typeof userProgresses, userProgresses);
    console.log('#'.repeat(25));

    res.statusCode = 200;
    res.json(userProgresses);
  } catch (error) {
    res.status(EStatusCodes.InternalError);
    res.json(error);
  }
});

progressesRoute.get(`${ROUTES_BASE}:userId/:lectionId`, async (req, res) => {
  const { lectionId, userId } = req.params;

  try {
    const userProgresses = await getProgress(userId, lectionId);
    res.statusCode = 200;
    res.json(userProgresses);
  } catch (error) {
    res.status(EStatusCodes.InternalError);
    res.json(error);
  }
});

progressesRoute.post(`${ROUTES_BASE}:userId/:lectionId`, async (req, res) => {
  const { lectionId, userId } = req.params;
  const { isFinished } = req.body;

  try {
    const userById = await getUsers(userId);
    const lectionById = await getLections(lectionId);

    if (!userById || !lectionById) {
      res.statusCode = 400;
      res.json({ error: 'unrecognized user id or lection id' });
      return;
    }

    const userProgresses = await updateProgress(userId, lectionId, isFinished);
    res.statusCode = 200;
    res.json(userProgresses);
  } catch (error) {
    res.status(EStatusCodes.InternalError);
    res.json(error);
  }
});
