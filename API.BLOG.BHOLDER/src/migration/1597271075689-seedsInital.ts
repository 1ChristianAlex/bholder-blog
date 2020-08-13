import { MigrationInterface, QueryRunner } from 'typeorm';
import { Role, User } from 'entity';

export class seedsInital1597271075689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roleAdm = {
      id: 1,
      description: 'Administrator',
    };

    const adminUser = {
      password: '$2b$10$M9G6chxSfBQchmxjo6j4fuPeBQo2aWL3uVp72X3pK2JRO.HFWaRKO',
      email: 'admin@bholder.com',
      firstName: 'Admin',
      lastName: 'Bholder',
      isActive: true,
      role: roleAdm,
      id: null,
    };
    await queryRunner.manager.insert(Role, roleAdm);
    await queryRunner.manager.insert(User, adminUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
