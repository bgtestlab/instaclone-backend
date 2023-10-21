import client from "../../client.mjs";
import { protectedResolver } from "../../users/users.utils.mjs";

export default {
  Mutation: {
    editPhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser }) => {
        // find a photo by received id and loggedInUser
        const ok = await client.photo.findFirst({
          where: {
            id, // photo id
            userId: loggedInUser.id, // user id
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        }

        // photo update
        const photo = await client.photo.update({
          where: {
            id,
          },
          data: {
            caption,
          },
        });

        console.log(photo);
      }
    ),
  },
};
