import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.mjs";

const server = new ApolloServer({
  schema,
  context: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjExMjI0NzQwfQ.8ijyOcGw_SIe05ABUthTyMbxOeMp4Aax8EpI9vCLPfc",
  },
});

const PORT = process.env.PORT;

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`🚀 Server ready at ${url}`);
