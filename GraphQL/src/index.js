import Koa from 'koa';
import Helmet from 'koa-helmet';
import Cors from '@koa/cors';
import Logger from 'koa-logger';
import { ApolloServer } from 'apollo-server-koa';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const app = new Koa();

app.use(Helmet());
app.use(Cors());
app.use(Logger());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(3000, () => console.log('Server started on port 3000'));
