export default `#graphql
    type Mutation {
        uploadPhoto(file: String!, caption: String!): Photo
    }
`;
