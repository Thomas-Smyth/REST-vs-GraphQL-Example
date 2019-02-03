import Koa from 'koa';
import Helmet from 'koa-helmet';
import Cors from '@koa/cors';
import Logger from 'koa-logger';
import Router from 'koa-router';

import configureRouter from './routes';

const index = new Koa();
const router = new Router();

index.use(Helmet());
index.use(Cors());
index.use(Logger());

configureRouter(router);
index.use(router.routes());
index.use(router.allowedMethods());

index.listen(3000, () => console.log('Server started on port 3000'));
