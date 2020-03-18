import app from './server';
import { BACKEND_PORT, HOST } from './config/env';

const host = `http://${HOST}:${BACKEND_PORT}`;

app.listen(parseInt(BACKEND_PORT), HOST, () =>
  console.log(`Server running on ${host}`),
);
