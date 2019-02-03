import posts from './posts';
import reactions from './reactions';
import users from './users';

const configureRouter = router => {
  router.use('/posts', posts);
  router.use('/reactions', reactions);
  router.use('/users', users);
};

export default configureRouter;
