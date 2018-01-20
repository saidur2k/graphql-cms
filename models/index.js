const User = require('./user');
const Tag = require('./tag');
const Post = require('./post');

User.hasMany(Post);
Post.belongsTo(User);
Tag.belongsToMany(Post, { through: 'PostTags' });
Post.belongsToMany(Tag, { through: 'PostTags' });

module.exports = {
  User,
  Post,
  Tag
};
