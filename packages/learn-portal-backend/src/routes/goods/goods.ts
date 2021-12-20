import { Router } from 'express';
import { ROUTES_BASE } from '../routes-constants';

export const goodsRoute = Router();

goodsRoute
    .get(ROUTES_BASE, (_, res) => {
        res.statusCode = 200;
        res.json({ goods: [] });
    });
    