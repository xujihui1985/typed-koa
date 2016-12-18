import * as http from 'http';
import * as Koa from 'koa';
import admin from './areas/admin';

const app = new Koa();
app.use(admin.routes());
app.onerror(err => {
  console.log('Error: ', err);
});

http
  .createServer(app.callback())
  .listen(3000);