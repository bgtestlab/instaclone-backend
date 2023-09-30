import client from "../client.mjs";

export default {
  Mutation: {
    createAccount: async (
      _,
      firstName,
      lastName,
      username,
      email,
      password
    ) => {
      // check if username or email are already on DB.
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      console.group(existingUser);
      // hash password
      // save and return the user
    },
  },
};
