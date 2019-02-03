import Router from 'koa-router';

import Users from '../controllers/users';

const router = new Router();

router.get('/', Users.getAllUsers);
router.get('/:id', Users.getUser);

export default router.routes();
