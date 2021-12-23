import { Router } from "express";
import { MOCK_USERS_EMAILS, getUserByEmail } from '@/database/users-database';
import { getUsers, createUser } from '@/database/grow-database';
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const userRoute = Router();

userRoute.get(`${ROUTES_BASE}`, async (_, res) => {
  try {
    res.statusCode = 200;
    const externalUser = await getUserByEmail(MOCK_USERS_EMAILS.ADMIN);

    if (!externalUser) {
      res.status(EStatusCodes.BadRequest);
      res.json('User do not authentificated');
      return;
    }

    const internalUser = await getUsers(externalUser.id); 
    const result = internalUser ? internalUser : await createUser(externalUser.id, externalUser.currentProfession);
    
    res.json({ ...externalUser, ...result?.toObject() });
  } catch (error) {
    res.status(EStatusCodes.NotFound);
    res.json(error);
  }
});
