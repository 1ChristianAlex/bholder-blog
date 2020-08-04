import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1595376274292 implements MigrationInterface {
  name = 'initial1595376274292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('posts', true);

    await queryRunner.createSchema('user', true);
    await queryRunner.query(
      `CREATE TABLE "user"."role" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "roleId" integer, CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("email"), CONSTRAINT "REL_c35a0d55e60a0a560004013ce6" UNIQUE ("roleId"), CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "tags" text NOT NULL, "image_category" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "userId" integer, CONSTRAINT "REL_c4d40f0b05f29775783470afaa" UNIQUE ("userId"), CONSTRAINT "PK_69ab32ab4a99c14e9d56025c2d8" PRIMARY KEY ("id", "name"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "thumbnail" character varying NOT NULL, "keywords" character varying, "datePublish" TIMESTAMP NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "updateAt" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "categoryId" integer, "categoryName" character varying, "userId" integer, CONSTRAINT "REL_df6043889e74521eed62555679" UNIQUE ("categoryId", "categoryName"), CONSTRAINT "REL_f37e90ce68453c715a0ccd1b4f" UNIQUE ("userId"), CONSTRAINT "PK_ecce54d295e861324881b34d571" PRIMARY KEY ("id", "title"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."user" ADD CONSTRAINT "FK_c35a0d55e60a0a560004013ce6c" FOREIGN KEY ("roleId") REFERENCES "user"."role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."category" ADD CONSTRAINT "FK_c4d40f0b05f29775783470afaa8" FOREIGN KEY ("userId") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_df6043889e74521eed62555679a" FOREIGN KEY ("categoryId", "categoryName") REFERENCES "posts"."category"("id","name") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_f37e90ce68453c715a0ccd1b4f7" FOREIGN KEY ("userId") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_f37e90ce68453c715a0ccd1b4f7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_df6043889e74521eed62555679a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."category" DROP CONSTRAINT "FK_c4d40f0b05f29775783470afaa8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."user" DROP CONSTRAINT "FK_c35a0d55e60a0a560004013ce6c"`,
    );
    await queryRunner.query(`DROP TABLE "posts"."post"`);
    await queryRunner.query(`DROP TABLE "posts"."category"`);
    await queryRunner.query(`DROP TABLE "user"."user"`);
    await queryRunner.query(`DROP TABLE "user"."role"`);
  }
}
