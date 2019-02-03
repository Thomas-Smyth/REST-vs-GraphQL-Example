import Router from 'koa-router';

import Posts from '../controllers/posts';

const router = new Router();

router.get('/', Posts.getAllPosts);
router.get('/:id', Posts.getPost);

export default router.routes();
