const { sequelize, Sequelize } = require('./connection');

const Post = sequelize.define(
  'Post',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    underscored: true
  }
);

module.exports = Post;
