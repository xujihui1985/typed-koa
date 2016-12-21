
export interface IApplicationBuilder {

  use(): IApplicationBuilder;
}

export interface IServiceContainer {

}

export interface IHostingEnvironment {
  isDevelopment(): boolean;
}