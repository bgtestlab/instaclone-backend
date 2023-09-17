import client from "./client.js";

// A map of functions which return data from the schema.
export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }) => client.movie.findUnique({ where: { id } }),
  },
};
