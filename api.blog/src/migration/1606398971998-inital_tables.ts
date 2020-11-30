import { MigrationInterface, QueryRunner } from 'typeorm';

export class initalTables1606398971998 implements MigrationInterface {
  name = 'initalTables1606398971998';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user"."role" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "roleId" integer, CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("email"), CONSTRAINT "REL_c35a0d55e60a0a560004013ce6" UNIQUE ("roleId"), CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image_category" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "userId" integer, CONSTRAINT "PK_852f266adc5d67c40405c887b49" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."media" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8c0d3355baa5576ae279530440a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post_category" ("id" SERIAL NOT NULL, "categoryId" integer, "postId" integer, CONSTRAINT "PK_f98c4f271052516b92c1acf6c4a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post_publication" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_0fde8d3ffd915f90d5ab4f95244" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post_status" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_237e84943aea04972ab33e62612" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post_visibility" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_59adcddce6eb65994b7f282bcc5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "posts"."post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "shortDescription" text NOT NULL, "thumbnail" character varying, "keywords" character varying, "datePublish" TIMESTAMP NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "postPublicationId" integer, "postStatusId" integer, "postVisibilityId" integer, "userId" integer, CONSTRAINT "PK_e55cc433639d0e21c3dbf637bce" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."user" ADD CONSTRAINT "FK_c35a0d55e60a0a560004013ce6c" FOREIGN KEY ("roleId") REFERENCES "user"."role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."category" ADD CONSTRAINT "FK_c4d40f0b05f29775783470afaa8" FOREIGN KEY ("userId") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post_category" ADD CONSTRAINT "FK_e84fd719056099356ec0e9517d6" FOREIGN KEY ("categoryId") REFERENCES "posts"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post_category" ADD CONSTRAINT "FK_e8b90509df8a71bb5b99d1c2587" FOREIGN KEY ("postId") REFERENCES "posts"."post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_22068569945ac4d9575f63a59ea" FOREIGN KEY ("postPublicationId") REFERENCES "posts"."post_publication"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_f82eafc1c79cd9c7f749da9eebe" FOREIGN KEY ("postStatusId") REFERENCES "posts"."post_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" ADD CONSTRAINT "FK_8f9ae694824e11182e8769fb200" FOREIGN KEY ("postVisibilityId") REFERENCES "posts"."post_visibility"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_8f9ae694824e11182e8769fb200"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_f82eafc1c79cd9c7f749da9eebe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post" DROP CONSTRAINT "FK_22068569945ac4d9575f63a59ea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post_category" DROP CONSTRAINT "FK_e8b90509df8a71bb5b99d1c2587"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."post_category" DROP CONSTRAINT "FK_e84fd719056099356ec0e9517d6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts"."category" DROP CONSTRAINT "FK_c4d40f0b05f29775783470afaa8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user"."user" DROP CONSTRAINT "FK_c35a0d55e60a0a560004013ce6c"`,
    );
    await queryRunner.query(`DROP TABLE "posts"."post"`);
    await queryRunner.query(`DROP TABLE "posts"."post_visibility"`);
    await queryRunner.query(`DROP TABLE "posts"."post_status"`);
    await queryRunner.query(`DROP TABLE "posts"."post_publication"`);
    await queryRunner.query(`DROP TABLE "posts"."post_category"`);
    await queryRunner.query(`DROP TABLE "posts"."media"`);
    await queryRunner.query(`DROP TABLE "posts"."category"`);
    await queryRunner.query(`DROP TABLE "user"."user"`);
    await queryRunner.query(`DROP TABLE "user"."role"`);
  }
}
