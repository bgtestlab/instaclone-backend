import client from "../../../client.mjs";
import { protectedResolver } from "../../../users/users.utils.mjs";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { photoId, payload }, { loggedInUser }) => {
        const ok = await client.photo.findUnique({
          where: { id: photoId },
          select: { id: true },
        });
        if (!ok) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        }

        await client.comment.create({
          data: {
            payload,
            photo: {
              connect: { id: photoId },
            },
            user: {
              connect: { id: loggedInUser },
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
