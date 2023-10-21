import client from "../../client.mjs";
import { protectedResolver } from "../../users/users.utils.mjs";
import { processHashtags } from "../photos.utils";

export default {
  Mutation: {
    editPhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser }) => {
        // find a photo by received id and loggedInUser
        const oldPhoto = await client.photo.findFirst({
          where: {
            id, // photo id
            userId: loggedInUser.id, // user id
          },
          include: {
            hashtags: {
              select: {
                hashtag: true,
              },
            },
          },
        });
        if (!oldPhoto) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        }

        // photo update
        // log: const photo = await client.photo.update({
        await client.photo.update({
          where: {
            id,
          },
          data: {
            caption,
            hashtags: {
              disconnect: oldPhoto.hashtags,
              connectOrCreate: processHashtags(caption),
            },
          },
        });

        //console.log(photo);
        return {
          ok: true,
        };
      }
    ),
  },
};
