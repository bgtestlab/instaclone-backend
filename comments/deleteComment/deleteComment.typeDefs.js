export default `#graphql
    type DeleteCommentMutation {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteComment(id: Int!): DeleteCommentMutation!
  }
`;
