const p = require('path');
require('dotenv').config({ path: p.resolve(__dirname, '../../config/.env') });

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    port: 5555
  }
  // test: {
  //   username: 'database_test',
  //   password: null,
  //   database: 'database_test',
  //   host: '127.0.0.1',
  //   dialect: 'mysql'
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOSTNAME,
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     ssl: {
  //       ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
  //     }
  //   }
  // }
};
