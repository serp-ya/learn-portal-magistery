import axios, { Method } from "axios";
import { REACT_APP_STORE_URL } from "../../env";

export const growApiRequest = <D, R = {}>(
  endpoint: string,
  method: Method,
  data?: D
): Promise<R> => {
  console.log('#'.repeat(25));
  console.log(`START ${method}:${endpoint} with data:`, data);

  return axios({
    url: `${REACT_APP_STORE_URL}/${endpoint}`,
    method,
    data,
  })
    .then((r) => {
      console.log(`DONE ${method}:${endpoint} response data:`, r.data);
      return r.data;
    })
    .catch((error) => {
      console.log(`ERROR ${method}:${endpoint} message:`, error.message);
    }).finally(() => {
      console.log(`FINISHED ${method}:${endpoint}`);
      console.log('#'.repeat(25));
    });
};
