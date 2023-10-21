export default `#graphql
    type LikePhotoResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        likePhoto(id: Int!): LikePhotoResult
    }
`;
