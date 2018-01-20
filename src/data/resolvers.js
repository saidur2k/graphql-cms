require('dotenv').config();

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const {
  allUsers,
  fetchUser,
  allPosts,
  fetchPost,
  allTags,
  fetchTag
} = require('./queries');

const { login, createUser, updateUser } = require('./mutations/user');
const { addPost, updatePost, deletePost } = require('./mutations/post');
const { addTag, updateTag, deleteTag } = require('./mutations/tag');

const resolvers = {
  Query: {
    allUsers,
    fetchUser,
    allPosts,
    fetchPost,
    allTags,
    fetchTag
  },
  Mutation: {
    login,
    createUser,
    updateUser,
    addPost,
    updatePost,
    deletePost,
    addTag,
    updateTag,
    deleteTag
  },
  User: {
    // Fetch all posts created by a user
    async posts(user) {
      return await user.getPosts();
    }
  },
  Post: {
    // Fetch the author of a particular post
    async user(post) {
      return await post.getUser();
    },
    // Fetch alls tags that a post belongs to
    async tags(post) {
      return await post.getTags();
    }
  },
  Tag: {
    // Fetch all posts belonging to a tag
    async posts(tag) {
      return await tag.getPosts();
    }
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime type',
    parseValue(value) {
      // value from the client
      return new Date(value);
    },
    serialize(value) {
      const date = new Date(value);
      // value sent to the client
      return date.toISOString();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // ast value is always in string format
        return parseInt(ast.value, 10);
      }
      return null;
    }
  })
};
module.exports = resolvers;
