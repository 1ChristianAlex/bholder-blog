import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { entitys } from './EntitiesDB';
import {
  DB_URL,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  PGPORT,
  DB_USERNAME,
  SECRET,
} from './Envs';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { JwtModuleOptions } from '@nestjs/jwt';
import { diskStorage } from 'multer';

export const envPath = resolve(__dirname, '../../src/config/.env');

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_URL,
  port: parseInt(PGPORT),
  username: DB_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: entitys,
  synchronize: true,
  migrationsTableName: 'migration',
};

export const dbConfigJson: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_URL,
  port: parseInt(PGPORT),
  username: DB_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [
    'src/entity/*.entity{.ts,.js}',
    'src/entity/*.schema/*.entity{.ts,.js}',
  ],
  synchronize: true,
  migrationsTableName: 'migration',
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

export const configJWT: JwtModuleOptions = {
  secret: SECRET,
  signOptions: { expiresIn: '24h' },
};

export const multerConfig = {
  storage: diskStorage({
    destination: resolve('uploads'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
};

(async () => {
  writeFileSync('ormconfig.json', JSON.stringify({ ...dbConfigJson }, null, 2));
})();
