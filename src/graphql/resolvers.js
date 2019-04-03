require('babel-polyfill');
const resolvers = {
  Query: {
    allUser: async (parent, args, { model }) => {
      const users = await model.User.find({});
      return users;
    },
    user: async (parent, { id }, { model }) => {
      const user = await model.User.findById(id);
      if (!user) {
        throw new Error('No user');
      }
      return { ...user.authToJson() };
    }
  },

  Mutation: {
    login: async (parent, { username, password }, { model }) => {
      const user = await model.User.findOne({ username });

      if (!user) {
        throw new Error('No user');
      }

      const isValidPassword = user.isValidPassword(password);
      if (!isValidPassword) {
        throw new Error('Password is wrong');
      }

      const userJson = user.authToJson();

      return { ...userJson };
    }
  }
};

export default resolvers;
