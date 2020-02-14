import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import ModelPosts from '../posts/post-model';
export default class User extends Model {}
User.init(
  {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role_id: { type: DataTypes.INTEGER },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { sequelize, tableName: 'users', underscored: true },
);

User.hasMany(ModelPosts);
