import client from "../../client.mjs";

export default {
  Query: {
    seePhoto: (_, { id }) =>
      client.photo.findUnique({
        where: { id },
      }),
  },
};
