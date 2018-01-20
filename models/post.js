module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define(
    'Post',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          // A post belongs to a user
          Post.belongsTo(models.User);
          // A post can belong to many tags
          Post.belongsToMany(models.Tag, { through: 'post_tag' });
        }
      }
    }
  );
  return Post;
};
