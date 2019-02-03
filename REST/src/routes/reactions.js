import Router from 'koa-router';

import Reactions from '../controllers/reactions';

const router = new Router();

router.get('/', Reactions.getAllReactions);
router.get('/:id', Reactions.getComment);

export default router.routes();
