import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`, {
  extensions: ["js"],
});
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`, {
  extensions: ["js"],
});

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);
