import client from "../../client.mjs";

export default {
  Query: {
    seeHashtag: (_, { hashtag }) =>
      client.hashtag.findUnique({
        where: {
          hashtag,
        },
      }),
  },
};
