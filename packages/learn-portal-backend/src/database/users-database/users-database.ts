import mongoose from 'mongoose';
import { USERS_DB_CONNECTION_CONFIG, USERS_DB_URL } from './users-database-constants';

// @ts-ignore - TODO: should overload mongoose types aith `auth` type
export const usersDBConnection = mongoose.createConnection(USERS_DB_URL, USERS_DB_CONNECTION_CONFIG)
