import data from '../../../Data/data.json';

async function getAllUsers(ctx) {
  let users = data.users;
  users.forEach(user => {
    user.posts = data.posts
      .filter(post => post.userID === user.id)
      .map(post => post.id);
    user.reactions = data.reactions
      .filter(reaction => reaction.userID === user.id)
      .map(reaction => reaction.id);
  });
  ctx.body = data.users;
}

async function getUser(ctx) {
  let user = data.users.find(user => user.id === parseInt(ctx.params.id));
  user.posts = data.posts
    .filter(post => post.userID === user.id)
    .map(post => post.id);
  user.reactions = data.reactions
    .filter(reaction => reaction.userID === user.id)
    .map(reaction => reaction.id);
  ctx.body = user;
}

export default {
  getAllUsers,
  getUser
};
