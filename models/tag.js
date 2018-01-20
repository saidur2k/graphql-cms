const { sequelize, Sequelize } = require('./connection');

const Tag = sequelize.define(
  'Tag',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: Sequelize.STRING
  },
  {
    underscored: true
  }
);

module.exports = Tag;
