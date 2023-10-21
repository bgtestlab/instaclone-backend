import client from "../../client.mjs";

export default {
  Query: {
    seePhotoComments: (_, { id }) =>
      client.comment.findMany({
        where: { photoId: id },
        orderBy: { createdAt: "asc" },
      }),
  },
};
