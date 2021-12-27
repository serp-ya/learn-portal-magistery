import { Router } from "express";
import { MOCK_USERS_EMAILS, getUserByEmail } from "@/database/users-database";
import { getUsers, createUser, updateUser } from "@/database/grow-database";
import { EStatusCodes, ROUTES_BASE } from "../routes-constants";

export const userRoute = Router();

userRoute.get(ROUTES_BASE, async (_, res) => {
  try {
    const externalUser = await getUserByEmail(MOCK_USERS_EMAILS.TEST);

    if (!externalUser) {
      res.status(EStatusCodes.BadRequest);
      res.json("User do not authentificated");
      return;
    }

    const internalUser = await getUsers(externalUser.id);
    const result = internalUser
      ? internalUser
      : await createUser(externalUser.id, externalUser.currentProfession);

    res.statusCode = 200;
    res.json({ ...externalUser, ...result?.toObject() });
  } catch (error) {
    res.status(EStatusCodes.NotFound);
    res.json(error);
  }
});

userRoute.put(ROUTES_BASE, async (req, res) => {
  try {
    const externalUser = await getUserByEmail(req.body.email);
    const result = await updateUser(req.body);

    res.statusCode = 200;
    res.json({ ...externalUser, ...result?.toObject() });
  } catch (error) {
    res.status(EStatusCodes.NotFound);
    res.json(error);
  }
});
