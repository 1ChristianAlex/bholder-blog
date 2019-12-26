import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "admin",
  password: "bholder-blog-2020",
  database: "bholder-database",
  port: 5555
});
