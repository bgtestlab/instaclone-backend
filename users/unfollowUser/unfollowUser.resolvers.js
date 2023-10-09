import client from "../../client.mjs";
import { protectedResolver } from "../users.utils.mjs";

export default {
  Mutation: {
    unfollowUser: protectedResolver(
      async (_, { username }, { loggedInUser }) => {
        // find a user to unfollow
        const ok = await client.user.findUnique({
          where: { username },
        });
        if (!ok) {
          return {
            ok: false,
            error: "Can't unfollow user.",
          };
        }

        // update a user record
        await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            following: {
              disconnect: {
                username,
              },
            },
          },
        });

        return {
          ok: true,
        };
      }
    ),
  },
};
