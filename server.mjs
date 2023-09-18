import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.mjs";

const server = new ApolloServer({
  schema,
});

const PORT = process.env.PORT;

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`🚀 Server ready at ${url}`);
