export default `#graphql
    type Query {
        searchUsers(keyword: String!): [User]
    }
`;
