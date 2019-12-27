import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';
import { sequelize } from '../config/database';

class Server {
  private app = express();

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  private routes() {
    routes.forEach(route => this.app.use(route));
  }
  private async database() {
    sequelize.sync();
  }
  public init() {
    this.database();
    this.middleware();
    this.routes();
    return this.app;
  }
}

export default new Server().init();
