import { Sequelize } from 'sequelize';
import * as env from './env';

export const sequelize = new Sequelize({
  host: env.HOSTNAME,
  dialect: 'mysql',
  username: env.DB_USER,
  password: env.PASSWORD,
  database: env.DB_NAME,
  port: parseInt(env.DB_PORT),
  logging: false
});
