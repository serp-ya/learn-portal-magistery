import express from 'express';
import cors from 'cors';
import { DICTIONARIES_ROUTE_NAME, dictionariesRoute } from './routes/dictionaries';
import { LECTIONS_ROUTE_NAME, lectionsRoute } from './routes/lections';
import { PROFESSIONS_ROUTE_NAME, professionsRoute } from './routes/professions';
import { SKILLS_ROUTE_NAME, skillsRoute } from './routes/skills';
import { USER_ROUTE_NAME, userRoute } from './routes/user';
import { sessionMiddleware } from './middlewares/session';
import { PUBLIC_FOLDER_NAME, PUBLIC_FOLDER_PATH } from './constants';

export const server = express();

server.set('view engine', 'ejs');

server.use(cors());
server.use(sessionMiddleware);
server.use(`/${PUBLIC_FOLDER_NAME}`, express.static(PUBLIC_FOLDER_PATH));

// API routes
server.use(`/api/${DICTIONARIES_ROUTE_NAME}`, dictionariesRoute);
server.use(`/api/${LECTIONS_ROUTE_NAME}`, lectionsRoute);
server.use(`/api/${PROFESSIONS_ROUTE_NAME}`, professionsRoute);
server.use(`/api/${SKILLS_ROUTE_NAME}`, skillsRoute);
server.use(`/api/${USER_ROUTE_NAME}`, userRoute);
