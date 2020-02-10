const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const { readFileSync } = require("fs");
const { createServer } = require("http");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const typeDefs = gql(
  readFileSync("./src/schema.graphql", { encoding: "utf-8" })
);
const resolvers = require("./src/resolvers");

const app = express();
const port = process.env.PORT || 8000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({}),
  context: ({ req, res }) => {},
  subscriptions: (params, socket) => {}
});

apolloServer.applyMiddleware({
  app,
  path: "/graphql",
  cors: { origin: `${process.env.CLIENT_URI}`, credentials: true }
});

app.get(
  "/playground",
  expressPlayground({
    endpoint: "/graphql",
    subscriptionEndpoint: `${process.env.WEBSOCKET_URI}${apolloServer.graphqlPath}`
  })
);

const PORT = process.env.PORT || 8000;

const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`Server listening on PORT ${PORT}`.magenta.bold);
  console.log(`GraphQL Endpoint: ${apolloServer.graphqlPath}`.magenta.bold);
});
