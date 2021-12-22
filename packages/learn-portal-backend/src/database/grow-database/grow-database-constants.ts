import { MONGODB_LOGIN, MONGODB_PASSWORD, MONGODB_URL } from '@/env';

const GROW_DB_NAME = 'grow-database';

export const GROW_DB_URL = (
    `${MONGODB_URL}/${GROW_DB_NAME}`
);

export const GROW_DB_CONNECTION_CONFIG = {
    auth: {
        authSource: 'admin',
    },
    user: MONGODB_LOGIN,
    pass: MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
};