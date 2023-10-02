import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schema.mjs";
import { getUser } from "./users/users.utils.mjs";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

const PORT = process.env.PORT;

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`🚀 Server ready at ${url}`);
