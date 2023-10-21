export default `#graphql
    type Query {
        searchPhotos(keyword: String!): [Photo]
    }
`;
