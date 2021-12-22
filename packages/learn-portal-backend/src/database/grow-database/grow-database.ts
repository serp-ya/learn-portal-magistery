import mongoose from 'mongoose';
import { GROW_DB_URL, GROW_DB_CONNECTION_CONFIG } from './grow-database-constants';

export const growDBConnection = mongoose.createConnection(
    GROW_DB_URL,

    // @ts-ignore - TODO: should overload mongoose types aith `auth` type
    GROW_DB_CONNECTION_CONFIG
)
