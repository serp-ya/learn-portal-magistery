import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TProgress } from "./progress-types";

export const getProgressById = ({
  lectionId,
  userId,
}: {
  lectionId: string;
  userId: string;
}): Promise<TProgress> =>
  growApiRequest<{}, TProgress>(
    `${EGrowApiEndpoints.PROGRESSES}/${userId}/${lectionId}`,
    "GET"
  );
