import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
const typeDefs = `#graphql
    type Movie {
        title: String
        year: Int
    }
    type Query {
        movies: [Movie]
        movie: Movie
    }
    type Mutation {
        createMovie(title:String!): Boolean
        deleteMovie(title: String!): Boolean
    }
`;

// A map of functions which return data from the schema.
const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "hello", year: 2023 }),
  },
  Mutation: {
    createMovie: (_, args) => {
      console.log(args);
      return true;
    },
    deleteMovie: (_, args) => {
      console.log(args);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
