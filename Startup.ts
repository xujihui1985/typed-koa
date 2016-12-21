import {
  IApplicationBuilder,
  IHostingEnvironment,
  IServiceContainer,
} from './interfaces';


export class Startup {

  public configure(app: IApplicationBuilder, environment: IHostingEnvironment) {
    if (environment.isDevelopment()) {
      app.use();
    }
    app.use();
  }

  public configureService(services: IServiceContainer) {

  }

}