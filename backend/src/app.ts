import app from "./server";
import { BACKEND_PORT, HOSTNAME } from "./config/env";

const host = `http://${HOSTNAME}:${BACKEND_PORT}`;

app.listen(parseInt(BACKEND_PORT), HOSTNAME, () =>
  console.log(`Server running on ${host}`)
);
