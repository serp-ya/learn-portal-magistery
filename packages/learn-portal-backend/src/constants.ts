import path from 'path';
import { COOKIE_SECRET } from './env';

export const APP_DEFAULT_PORT = 3000;

export const PUBLIC_FOLDER_NAME = 'public';
export const PUBLIC_FOLDER_PATH = path.join(__dirname, '../', PUBLIC_FOLDER_NAME);

const DEFAULT_SESSION_SECRET = 'kitties_eat_pretties';
export const SESSION_CONFIG = {
    secret: COOKIE_SECRET || DEFAULT_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};

export enum EEmployeeLevels {
    D1 = 'd1', // Junior
    D2 = 'd2', // Middle
    D3 = 'd3', // Senior
    D4 = 'd4', // Lead
    D5 = 'd5', // Chef
};

export enum EUserGroupCodes {
    Admin = '1',
    User = '2',
};
