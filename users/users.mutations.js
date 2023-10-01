import bcrypt from "bcrypt";
import client from "../client.mjs";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
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
        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }

        // hash password
        const uglyPassword = await bcrypt.hash(password, 10);
        console.log(uglyPassword);

        // save and return the user
        return client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
      } catch (e) {
        return e;
      }
    },
  },
  login: async (_, { username, password }) => {
    // find user with args.username
    const user = await client.user.findFirst({ where: { username } });
    if (!user) {
      return {
        ok: false,
        error: "User not found.",
      };
    }
    // check password with args.password
    const passwordOk = await bcrypt.compare(password, user.password);
    console.log(passwordOk);
    if (!passwordOk) {
      return {
        ok: false,
        error: "Password incorrect.",
      };
    }
    // issue a token and send it to the user
  },
};
