import { EGrowApiEndpoints } from "../grow-api-constants";
import { growApiRequest } from "../grow-api-request";
import { TLection } from "./lections-types";

export const getLectionById = (lectionId: string): Promise<TLection> =>
  growApiRequest<undefined, TLection>(
    `${EGrowApiEndpoints.LECTIONS}/${lectionId}`,
    "GET"
  );
