import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

export default class Posts extends Model {}
Posts.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    categorie: { type: DataTypes.STRING },
    meta: { type: DataTypes.STRING },
    keywords: { type: DataTypes.STRING },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { sequelize, tableName: 'posts', underscored: true },
);
