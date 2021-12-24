import axios, { Method } from "axios";
import { REACT_APP_STORE_URL } from "../../env";

export const growApiRequest = <D, R = {}>(
  endpoint: string,
  method: Method,
  data?: D
): Promise<R> =>
  axios({
    url: `${REACT_APP_STORE_URL}/${endpoint}`,
    method,
    data: data ? JSON.stringify(data) : undefined,
  }).then((r) => {
    console.log(`${endpoint} response status: ${r.status}\n`);
    console.log(`${endpoint} response data:`, r.data);

    return r.data;
  });
