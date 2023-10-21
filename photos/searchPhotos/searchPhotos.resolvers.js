import client from "../../client.mjs";

export default {
  Query: {
    searchPhotos: (_, { keyword }) =>
      client.photo.findMany({
        where: {
          caption: {
            startsWith: keyword,
          },
        },
      }),
  },
};
