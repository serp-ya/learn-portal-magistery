import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TProgress } from "./progress-types";

export const postProgressById = ({
  finished = false,
  lectionId,
  userId
}: {
  finished?: boolean;
  lectionId: string;
  userId: string;
}): Promise<TProgress> =>
  growApiRequest<{ finished: boolean }, TProgress>(
    `${EGrowApiEndpoints.PROGRESSES}/${userId}/${lectionId}`,
    "POST",
    { finished }
  );
