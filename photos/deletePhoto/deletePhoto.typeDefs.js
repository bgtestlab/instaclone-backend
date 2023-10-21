export default `#graphql
  type DeletePhotoResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deletePhoto(id: Int!): DeletePhotoResult!
  }
`;
