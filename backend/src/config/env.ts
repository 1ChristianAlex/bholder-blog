import { config } from 'dotenv';
import { resolve } from 'path';

const envPath = resolve('src/config/.env');
config({ path: envPath });

const { APP_URL, POSTGRES_DB, POSTGRES_PASSWORD, PGURL } = process.env || {
  APP_URL: 'localhost',
  POSTGRES_DB: 'blog_bholder',
  POSTGRES_PASSWORD: '123456',
  PGURL: 'localhost',
};

const APP_PORT = parseInt(process.env.APP_PORT) || 5555;
const PGPORT = parseInt(process.env.PGPORT) || 4444;

export { APP_URL, POSTGRES_DB, POSTGRES_PASSWORD, PGURL, APP_PORT, PGPORT };
