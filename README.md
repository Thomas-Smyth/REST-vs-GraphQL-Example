<div align="center">

# REST vs GraphQL Example API

[![GitHub release](https://img.shields.io/github/release/Thomas-Smyth/REST-vs-GraphQL-Example.svg?style=flat-square)](https://github.com/Thomas-Smyth/REST-vs-GraphQL-Example/releases)
[![GitHub issues](https://img.shields.io/github/issues/Thomas-Smyth/REST-vs-GraphQL-Example.svg?style=flat-square)](https://github.com/Thomas-Smyth/REST-vs-GraphQL-Example/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/Thomas-Smyth/REST-vs-GraphQL-Example.svg?style=flat-square)](https://github.com/Thomas-Smyth/REST-vs-GraphQL-Example/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/Thomas-Smyth/REST-vs-GraphQL-Example.svg?style=flat-square)](https://github.com/Thomas-Smyth/REST-vs-GraphQL-Example/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/Thomas-Smyth/SpaceX-API-Wrapper.svg?style=flat-square)](https://github.com/Thomas-Smyth/REST-vs-GraphQL-Example/blob/master/LICENSE.md)

### REST and GraphQL API Interfaces for a Basic Social Media Application
<br>
</div>

## Installation
To install via `npm`:
```
cd REST
npm install
cd ../GraphQL
npm install
```

To install via `yarn`:
```
cd REST
yarn install
cd ../GraphQL
yarn install
```

## Starting API Servers
To start via `npm`:
```
cd REST
npm run build
npm run start
cd ../GraphQL
npm run build
npm run start
```

To start via `yarn`:
```
cd REST
yarn run build
yarn run start
cd ../GraphQL
yarn run build
yarn run start
```

## REST Endpoints
* `/users` - Get all users.
* `/users/:id` - Get user by ID.
* `/posts` - Get all posts.
* `/posts/:id` - Get post by ID.
* `/reactions` - Get all reactions.
* `/reactions/:id` - Get reactions by ID.

## GraphQL Schema
```graphql
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
```

## Postman
A Postman collection has been exported and added to this repository. It contains a examples to cover all REST endpoints and a single GraphQL example.

To use the collection:
* Open Postman
* File > Import
* Select the Postman Collection JSON file from the repositories root.

## Motivation
The creation of this repository was motivated by the need to demonstrate the benefits of GraphQL APIs to fellow students, at the University of Exeter, some of which may have never had any experience using APIs.

Through demos of both REST and GraphQL APIs to implement the same basic functionality of a mock social media application, this repository has enabled me to demonstrate clearly the direct benefits of GraphQL over REST APIs to these students.

I am making this repository public to allow those in the same position to use this resource.

## Contributing
I am accepting contributions to this project, so for those who wish to help improve and build on this resource simply create a pull request and I will review it as soon as possible!
