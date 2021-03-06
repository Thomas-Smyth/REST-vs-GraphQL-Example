import Koa from 'koa';
import Helmet from 'koa-helmet';
import Cors from '@koa/cors';
import Logger from 'koa-logger';
import Router from 'koa-router';

import configureRouter from './routes';

const app = new Koa();
const router = new Router();

app.use(Helmet());
app.use(Cors());
app.use(Logger());

configureRouter(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('Server started on port 3000'));
