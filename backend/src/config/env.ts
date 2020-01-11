import { config } from 'dotenv';
import { resolve } from 'path';

config({
  path: resolve(__dirname, '.env')
});
export const {
  HOSTNAME,
  DB_USER,
  PASSWORD,
  DB_NAME,
  DB_PORT,
  BACKEND_PORT,
  SECRET
} = process.env;
