import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TProgress } from "./progress-types";

export const getProgressById = (
  lectionId: string,
  userId: string
): Promise<TProgress> =>
  growApiRequest<{ lectionId: string; userId: string }, TProgress>(
    `${EGrowApiEndpoints.PROGRESSES}`,
    "POST",
    { lectionId, userId }
  );
