const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { KEY_SECRET } = require('../../config');
const User = require('../../models/User');

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { userName, email, password, confirmPassword } },
      context,
      info,
    ) {
      const user = await User.findOne({ userName });
      if (user) {
        throw new UserInputError('UserName is taken', {
          errors: {
            userName: 'This userName is taken',
          },
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        userName,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();
      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          userName: res.userName,
        },
        KEY_SECRET,
        { expiresIn: '1h' },
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
