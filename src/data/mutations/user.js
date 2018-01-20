const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../../models');

// Handles user login
const login = async (_, { email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('No user with that email');
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Incorrect password');
  }
  // Return json web token
  return jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: '1y' }
  );
};

// Create new user
const createUser = async (_, { firstName, lastName, email, password }) => {
  return await User.create({
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, 10)
  });
};

// Update a particular user
const updateUser = async (
  _,
  { id, firstName, lastName, email, password },
  { authUser }
) => {
  // Make sure user is logged in
  if (!authUser) {
    throw new Error('You must log in to continue!');
  }
  // fetch the user by it ID
  const user = await User.findById(id);
  // Update the user
  await user.update({
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, 10)
  });
  return user;
};

module.exports = {
  login,
  createUser,
  updateUser
};
