import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entitys } from './entitiesDB';
import {
  DB_URL,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  PGPORT,
  DB_USERNAME,
  SECRET,
} from './envs';
import { JwtModuleOptions } from '@nestjs/jwt';

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
  entities: ['src/entity/*.entity{.ts,.js}'],
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

export const graphQLSchemaPath: string = resolve(
  __dirname,
  '../../src/config/schema.gql',
);

(async () => {
  writeFileSync('ormconfig.json', JSON.stringify({ ...dbConfigJson }, null, 2));
})();
