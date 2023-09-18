import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`, {
  extensions: ["js"],
});
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{queries,mutations}.js`,
  {
    extensions: ["js"],
  }
);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
