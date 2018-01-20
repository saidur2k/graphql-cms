'use strict';
module.exports = (sequelize, DataTypes) => {
  var PostTag = sequelize.define('PostTag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return PostTag;
};
