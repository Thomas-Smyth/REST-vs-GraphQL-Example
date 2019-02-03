import data from '../../../Data/data.json';

async function getAllReactions(ctx) {
  ctx.body = data.reactions;
}

async function getComment(ctx) {
  ctx.body = data.reactions.filter(
    comment => comment.id === parseInt(ctx.params.id)
  );
}

export default {
  getAllReactions,
  getComment
};
