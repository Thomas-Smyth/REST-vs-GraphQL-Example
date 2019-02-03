import data from '../../Data/data.json';

export default {
  Query: {
    user: async (root, { id }) => {
      return data.users.find(user => user.id === id);
    },
    users: async () => {
      console.log(data.users);
      return data.users;
    },
    post: async (root, { id }) => {
      return data.posts.find(post => post.id === id);
    },
    posts: async () => {
      return data.posts;
    },
    reaction: async (root, { id }) => {
      return data.reactions.find(reaction => reaction.id === id);
    },
    reactions: async () => {
      return data.reactions;
    }
  },
  User: {
    posts: async ({ id }) => {
      return data.posts.filter(post => post.userID === id);
    },
    reactions: async ({ id }) => {
      return data.reactions.filter(reaction => reaction.userID === id);
    }
  },
  Post: {
    user: async ({ userID }) => {
      return data.users.find(user => user.id === userID);
    },
    reactions: async ({ id }) => {
      return data.reactions.filter(reaction => reaction.postID === id);
    }
  },
  Reaction: {
    user: async ({ userID }) => {
      return data.users.find(user => user.id === userID);
    },
    post: async ({ postID }) => {
      return data.posts.find(post => post.id === postID);
    }
  }
};
