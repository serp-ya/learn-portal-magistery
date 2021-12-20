import { MONGODB_LOGIN, MONGODB_PASSWORD, MONGODB_URL } from '@/env';

const USERS_DB_NAME = 'users';

export const USERS_DB_URL = (
    `${MONGODB_URL}/${USERS_DB_NAME}`
);

export const USERS_DB_CONNECTION_CONFIG = {
    auth: {
        authSource: 'admin',
    },
    user: MONGODB_LOGIN,
    pass: MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
