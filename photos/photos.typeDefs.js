export default `#graphql
    type Photo {
        id: String!
        user: User!
        file: String!
        caption: String
        hashtag: [Hashtag]
        createdAt: String!
        updatedAt: String!
    }

    type Hashtag {
        id: String!
        hashtag: String!
        photos: [Photo]
        craetedAt: String!
        updatedAt: String!
    }
`;
