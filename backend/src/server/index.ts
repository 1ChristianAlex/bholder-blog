import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';
import { privatesRoutes } from '../middleware/';
import { sequelize } from '../config/database';

class Server {
  private app = express();

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(privatesRoutes);
  }
  private routes() {
    routes.forEach(route => this.app.use(route));
  }
  private async database() {
    sequelize
      .sync({
        logging: false,
        alter: false,
        force: false
      })
      .then(() => console.log('Database Ready'));
  }
  public init() {
    this.database();
    this.middleware();
    this.routes();
    return this.app;
  }
}

export default new Server().init();
