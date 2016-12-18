
interface IApplicationBuilder {

  use(): IApplicationBuilder;
}

interface IServiceContainer {

}

interface IHostingEnvironment {
  isDevelopment(): boolean;
}


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