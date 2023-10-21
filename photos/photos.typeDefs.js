export default `#graphql
    type Photo {
        id: Int!
        user: User!
        file: String!
        caption: String
        hashtags: [Hashtag]
        createdAt: String!
        updatedAt: String!
    }

    type Hashtag {
        id: Int!
        hashtag: String!
        photos: (page: Int!): [Photo]
        totalPhotos: Int!
        craetedAt: String!
        updatedAt: String!
    }
`;
