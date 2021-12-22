import { Router } from "express";
import { MOCK_USERS_EMAILS, getUserByEmail } from '@/database/users-database';
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const userRoute = Router();


userRoute.get(`${ROUTES_BASE}`, async (req, res) => {
  try {
    res.statusCode = 200;
    res.json({ user: await getUserByEmail(MOCK_USERS_EMAILS.ADMIN) });
  } catch (error) {
    res.status(EStatusCodes.NotFound);
    res.json(error);
  }
});
