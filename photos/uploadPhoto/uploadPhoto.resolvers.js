export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          // parse caption
          // get or create hashtags
        }
        // save the photo w/ the parsed hashtags
        // add the photo to the hashtags
      }
    ),
  },
};
