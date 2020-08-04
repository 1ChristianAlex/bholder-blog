import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../../src/config/.env') });

export const {
  APP_URL,
  APP_PORT,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  PGPORT,
  DB_URL,
  DB_USERNAME,
  NODE_ENV,
  HASH_KEY,
  SECRET,
  AWS_BUCKET_NAME,
} = process.env;
