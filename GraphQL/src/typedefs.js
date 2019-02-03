import { gql } from 'apollo-server-koa';

export default gql`
  type User {
    id: Int
    username: String
    email: String
    posts: [Post]
    reactions: [Reaction]
  }

  type Post {
    id: Int
    user: User
    text: String
    reactions: [Reaction]
  }

  type Reaction {
    id: Int
    user: User
    post: Post
    type: String
  }

  type Query {
    user(id: Int): User
    users: [User]
    post(id: Int): Post
    posts: [Post]
    reaction(id: Int): Reaction
    reactions: [Reaction]
  }

  schema {
    query: Query
  }
`;
