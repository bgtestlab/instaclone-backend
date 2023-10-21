import client from "../../client.mjs";
import { protectedResolver } from "../../users/users.utils.mjs";
import { processHashtags } from "../photos.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashtagObj = [];
        if (caption) {
          // parse caption
          hashtagObj = processHashtags(caption);

          // get or create hashtags
        }
        // save the photo w/ the parsed hashtags
        // add the photo to the hashtags
        return client.photo.create({
          data: {
            file,
            caption,
            user: {
              connect: {
                id: loggedInUser,
              },
            },
            ...(hashtagObj.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagObj,
              },
            }),
          },
        });
      }
    ),
  },
};
