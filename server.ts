const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

server.use(jsonServer.rewriter({
    "/jobs/list/:order": "/jobs?_sort=publication_date&_order=:order",
    "/jobs/list/:order/:type": "/jobs?type=:type&_sort=publication_date&_order=:order"
}));

const router = jsonServer.router(path.join(__dirname, './db/data.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

jsonServer.create();

server.listen(5000, () => {
  console.log('JSON Server is running at 5000 port')
});