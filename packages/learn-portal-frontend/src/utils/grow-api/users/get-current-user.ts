import { EGrowApiEndpoints } from '../grow-api-constants';
import { growApiRequest } from '../grow-api-request';
import { TUser } from './users-types';

export const getCurrentUser = (): Promise<TUser> => growApiRequest<undefined, TUser>(EGrowApiEndpoints.CURRENT_USER, 'GET');
