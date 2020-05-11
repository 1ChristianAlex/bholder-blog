import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PGPORT, POSTGRES_DB, POSTGRES_PASSWORD, PGURL } from './env';
import { User } from 'entitys';

const dataBaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: PGURL,
  port: PGPORT,
  username: 'postgres',
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [User],
  synchronize: true,
};

export default dataBaseConfig;
