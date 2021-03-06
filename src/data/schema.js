const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = `
    scalar DateTime
    type User {
        id: Int!
        first_name: String!
        last_name: String
        email: String!
        posts: [Post]
        created_at: DateTime! # will be generated
        updated_at: DateTime! # will be generated
    }
    type Post {
        id: Int!
        title: String!
        slug: String!
        content: String!
        status: Boolean!
        user: User!
        tags: [Tag!]!
        created_at: DateTime! # will be generated
        updated_at: DateTime! # will be generated
    }
    type Tag {
        id: Int!
        name: String!
        slug: String!
        description: String
        posts: [Post]
        created_at: DateTime! # will be generated
        updated_at: DateTime! # will be generated
    }
    type Query {
        allUsers: [User]
        fetchUser(id: Int!): User
        allPosts: [Post]
        fetchPost(id: Int!): Post
        allTags: [Tag]
        fetchTag(id: Int!): Tag
    }
    type Mutation {
        login (
            email: String!,
            password: String!
        ): String
        createUser (
            first_name: String!,
            last_name: String,
            email: String!,
            password: String!
        ): User
        updateUser (
            id: Int!,
            first_name: String!,
            last_name: String,
            email: String!,
            password: String!
        ): User
        addPost (
            title: String!,
            content: String!,
            status: Boolean
            tags: [Int!]!
        ): Post
        updatePost (
            id: Int!,
            title: String!,
            content: String!,
            status: Boolean,
            tags: [Int!]!
        ): Post
        deletePost (id: Int!): Boolean
        addTag (
            name: String!,
            description: String
        ): Tag
        updateTag (
            id: Int!,
            name: String!,
            description: String
        ): Tag
        deleteTag (id: Int!): Boolean
    }
`;
module.exports = makeExecutableSchema({ typeDefs, resolvers });
