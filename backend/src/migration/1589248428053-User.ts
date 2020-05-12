import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1589248428053 implements MigrationInterface {
  name = 'User1589248428053';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner
      .createSchema('user')
      .then(() =>
        queryRunner.query(
          `CREATE TABLE "user"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("id"))`,
          undefined,
        ),
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"."user"`, undefined);
  }
}
