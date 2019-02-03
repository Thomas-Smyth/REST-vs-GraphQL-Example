import data from '../../../Data/data.json';

async function getAllPosts(ctx) {
  let posts = data.posts;
  posts.forEach(post => {
    post.reactions = data.reactions
      .filter(reaction => reaction.postID === post.id)
      .map(reaction => reaction.id);
  });
  ctx.body = posts;
}

async function getPost(ctx) {
  let post = data.posts.find(post => post.id === parseInt(ctx.params.id));
  post.reactions = data.reactions
    .filter(reaction => reaction.postID === post.id)
    .map(reaction => reaction.id);
  ctx.body = post;
}

export default {
  getAllPosts,
  getPost
};
