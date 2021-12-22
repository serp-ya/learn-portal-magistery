import { server } from "./server";
import { APP_DEFAULT_PORT } from "./constants";
import { growDBConnection } from "./database";
import { PORT } from "./env";

const appPort = PORT || APP_DEFAULT_PORT;

Promise.all([growDBConnection])
  .then(() => {
    server.listen(appPort, () => {
      process.stdout.write(`Server started on ${appPort} port!\n`);
    });
  })
  .catch((error) => process.stdout.write(JSON.stringify(error)));
