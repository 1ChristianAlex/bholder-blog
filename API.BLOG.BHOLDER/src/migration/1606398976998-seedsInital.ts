import { MigrationInterface, QueryRunner } from 'typeorm';
import {
  Role,
  User,
  PostPublication,
  PostVisibility,
  PostStatus,
} from 'entity';

export class seedsInital1606398976998 implements MigrationInterface {
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

    const postPublicationList = [
      new PostPublication(1, 'Imediata'),
      new PostPublication(2, 'Agendada'),
    ];

    const postVisibilityList = [
      new PostVisibility(1, 'Visivel'),
      new PostVisibility(2, 'Escondido'),
    ];

    const postStatusList = [
      new PostStatus(1, 'Draft'),
      new PostStatus(2, 'Salvo'),
      new PostStatus(3, 'Deletado'),
    ];

    await queryRunner.manager.insert(Role, roleAdm);
    await queryRunner.manager.insert(User, adminUser);

    await queryRunner.manager.insert(PostPublication, postPublicationList);
    await queryRunner.manager.insert(PostVisibility, postVisibilityList);

    await queryRunner.manager.insert(PostStatus, postStatusList);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const roleAdmin = new Role();
    roleAdmin.id = 1;

    const user = new User();
    user.password =
      '$2b$10$M9G6chxSfBQchmxjo6j4fuPeBQo2aWL3uVp72X3pK2JRO.HFWaRKO';

    await queryRunner.manager.delete<Role>(
      `user.${Role.name.toLocaleLowerCase()}`,
      roleAdmin,
    );
    await queryRunner.manager.delete<User>(
      `user.${User.name.toLocaleLowerCase()}`,
      user,
    );

    await queryRunner.manager.delete(PostPublication, {});
    await queryRunner.manager.delete(PostVisibility, {});

    await queryRunner.manager.delete(PostStatus, {});
  }
}
