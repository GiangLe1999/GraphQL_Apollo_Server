import { ApolloServer, gql } from "apollo-server";

// Define Type của Data
// Tất cả những gì nằm giữa cặp dấu `` gọi là GraphQL Schema Definition Language
const typeDefs = gql`
  type User {
    id: ID
    username: String
  }

  type Tweet {
    id: ID
    text: String
    author: User
  }

  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
  # GET /api/v1/tweets
  # GET /api/v1/tweet/:id

  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID): Boolean
  }
  # POST /api/v1/tweets
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
