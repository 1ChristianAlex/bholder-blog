import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

export default class User extends Model {}
User.init(
  {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },
  { sequelize }
);
