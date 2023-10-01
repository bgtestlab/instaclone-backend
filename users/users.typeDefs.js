export default `#graphql
  type User {
    id: Int!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    createAccount(
        firstName: String!
        lastName: String
        username: String!
        email: String!
        password: String!
    ): User
  }
  type Query{
    seeProfile(username: String!): User
  }
`;
