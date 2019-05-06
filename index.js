import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start({ port: "4567" }, () => console.log("Graphql Server Running"));
