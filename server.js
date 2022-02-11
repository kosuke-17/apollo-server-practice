import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
// import { users } from "./data";

const users = [
  {
    id: 1,
    name: "Zonomaa",
    age: 25,
    created_date: "2019-04-05 01:35:25.000",
  },
  {
    id: 2,
    name: "Masa",
    age: 28,
    created_date: "2019-04-10 08:23:51.000",
  },
  {
    id: 3,
    name: "Ms",
    age: 30,
    created_date: "2019-04-10 08:32:09.000",
  },
];

const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
    created_date: String
  }
  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

await server.start();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
