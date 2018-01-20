const { User, Post, Tag } = require('../../models');

// Fetch all users
const allUsers = async () => await User.all();
// Get a user by it ID
const fetchUser = async (_, { id }) => await User.findById(id);
// Fetch all posts
const allPosts = async () => await Post.all();
// Get a post by it ID
const fetchPost = async (_, { id }) => await Post.findById(id);
// Fetch all tags
const allTags = async () => await Tag.all();
// Get a tag by it ID
const fetchTag = async (_, { id }) => await Tag.findById(id);

module.exports = {
  allUsers,
  fetchUser,
  allPosts,
  fetchPost,
  allTags,
  fetchTag
};
