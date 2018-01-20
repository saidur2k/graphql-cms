const { sequelize, Sequelize } = require('./connection');
const PostTag = sequelize.define(
  'PostTag',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    underscored: true
  }
);

module.exports = PostTag;
