import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialSchemas1606397415816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('user');
    await queryRunner.createSchema('posts');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('user');
    await queryRunner.dropSchema('posts');
  }
}
