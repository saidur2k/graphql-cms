const slugify = require('slugify');
const { User, Post } = require('../../../models');

// Add a new post
const addPost = async (_, { title, content, status, tags }, { authUser }) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  const user = await User.findOne({ where: { id: authUser.id } });
  const post = await Post.create({
    userId: user.id,
    title,
    slug: slugify(title, { lower: true }),
    content,
    status
  });
  // Assign tags to post
  await post.setTags(tags);
  return post;
};

// Update a particular post
const updatePost = async (
  _,
  { id, title, content, status, tags },
  { authUser }
) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  // fetch the post by it ID
  const post = await Post.findById(id);
  // Update the post
  await post.update({
    title,
    slug: slugify(title, { lower: true }),
    content,
    status
  });
  // Assign tags to post
  await post.setTags(tags);
  return post;
};

// Delete a specified post
const deletePost = async (_, { id }, { authUser }) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  // fetch the post by it ID
  const post = await Post.findById(id);
  return await post.destroy();
};

module.exports = {
  addPost,
  updatePost,
  deletePost
};
