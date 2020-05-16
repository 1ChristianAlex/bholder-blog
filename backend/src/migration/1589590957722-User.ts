import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1589590957722 implements MigrationInterface {
  name = 'User1589590957722';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('user');
    await queryRunner.createSchema('posts');
    await queryRunner.query(
      `CREATE TABLE "user"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "thumbnail" character varying NOT NULL, "categorie" character varying, "image" character varying, "keywords" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "userId" integer, CONSTRAINT "REL_f37e90ce68453c715a0ccd1b4f" UNIQUE ("userId"), CONSTRAINT "PK_ecce54d295e861324881b34d571" PRIMARY KEY ("id", "title"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_f37e90ce68453c715a0ccd1b4f7" FOREIGN KEY ("userId") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_f37e90ce68453c715a0ccd1b4f7"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "posts"."post"`, undefined);
    await queryRunner.query(`DROP TABLE "user"."user"`, undefined);
  }
}
