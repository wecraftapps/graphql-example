const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const helmet = require('koa-helmet');

const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const schema = require('./src/server/db/graphql/middlewares');

const koa = new Koa();

koa.use(bodyParser({
  enableTypes: ['json', 'form', 'text'],
  extendTypes: {
    text: ['text/xml'],
  },
}));

koa.use(helmet());

const app = new Router();

app.post('/graphql', graphqlKoa({ schema }));
app.get('/graphql', graphqlKoa({ schema }));
app.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql',
}));

koa.use(app.routes());
koa.listen(3000);

console.log(`App is running on port 3000`);
console.log(`You can contact the server on http://localhost:3000`);
