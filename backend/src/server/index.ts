import * as express from "express";
import cors from "cors";
import { router } from "./routes";
import { sequelize } from "../config/database";

class Server {
  private app = express();

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  private routes() {
    this.app.use(router);
  }
  private async database() {
    sequelize.authenticate();
  }
  public init() {
    this.database();
    this.middleware();
    this.routes();
    return this.app;
  }
}

export default new Server().init();
