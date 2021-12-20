import express from 'express';
import cors from 'cors';
import { GOODS_ROUTE_NAME, goodsRoute } from './routes/goods';
import { LOGIN_ROUTE_NAME, loginRoute } from './routes/login';
import { USER_ROUTE_NAME } from './routes/user';
import { auth } from './middlewares/auth';
import { sessionMiddleware } from './middlewares/session';
import { PUBLIC_FOLDER_NAME, PUBLIC_FOLDER_PATH } from './constants';

export const server = express();

server.set('view engine', 'ejs');

server.use(cors());
server.use(sessionMiddleware);
server.use(auth.initialize());
server.use(auth.session());
server.use(`/${PUBLIC_FOLDER_NAME}`, express.static(PUBLIC_FOLDER_PATH));

// API routes
server.use(`/api/${GOODS_ROUTE_NAME}`, goodsRoute);
server.use(`/api/${USER_ROUTE_NAME}/${LOGIN_ROUTE_NAME}`, loginRoute);
