export default `#graphql
    type Subscription {
        roomUpdates(id: Int!): Message
    }
`;
