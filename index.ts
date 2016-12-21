import * as http from 'http';
import * as Koa from 'koa';
import { Startup } from './Startup';
import { admin } from './areas';

class AppBuilder {
  use() {
    return this;
  }

  build(app: Koa) {

  }

}

class HostingEnviroment {
  isDevelopment(): boolean {
    return true;
  }
}
const appBuilder = new AppBuilder();
const env = new HostingEnviroment();

const startup = new Startup();
startup.configure(appBuilder, env);

const app = new Koa();

appBuilder.build(app);
app.use(admin.routes());

http
  .createServer(app.callback())
  .listen(3000);