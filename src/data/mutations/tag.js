const slugify = require('slugify');
const { Tag } = require('../../../models');

// Add a new tag
const addTag = async (_, { name, description }, { authUser }) => {
  console.log('here');
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  return await Tag.create({
    name,
    slug: slugify(name, { lower: true }),
    description
  });
};

// Update a particular tag
const updateTag = async (_, { id, name, description }, { authUser }) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  // fetch the tag by it ID
  const tag = await Tag.findById(id);
  // Update the tag
  await tag.update({
    name,
    slug: slugify(name, { lower: true }),
    description
  });
  return tag;
};

// Delete a specified tag
const deleteTag = async (_, { id }, { authUser }) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  // fetch the tag by it ID
  const tag = await Tag.findById(id);
  return await tag.destroy();
};

module.exports = {
  addTag,
  updateTag,
  deleteTag
};
