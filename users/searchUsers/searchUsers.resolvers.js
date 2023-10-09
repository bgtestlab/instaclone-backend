export default {
  Query: {
    searchUsers: async (_, { keyword }) =>
      client.user.findMany({
        where: {
          username: {
            startswith: keyword.toLowerCase(),
          },
        },
      }),
  },
};
