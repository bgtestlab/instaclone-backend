import client from "../../client.mjs";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          // parse caption
          const hashtags = caption.match(/#[\w]+/g);

          // get or create hashtags
        }
        // save the photo w/ the parsed hashtags
        // add the photo to the hashtags
        client.photo.create({
          data: {
            file,
            caption,
            hashtags: {
              connectOrCreate: [
                { where: { hashtag: "#food" } },
                { create: { hashtag: "food" } },
              ],
            },
          },
        });
      }
    ),
  },
};
