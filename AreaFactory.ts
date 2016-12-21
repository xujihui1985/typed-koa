import * as Router from 'koa-router';

const routerCollections: {
  [namespace: string]: Router
} = {};

interface BluePrintOptions {
  namespace: string;
  controllerCollections: any[];
}

export function area(options: BluePrintOptions): Router {
  let router;
  if (routerCollections[options.namespace]) {
    router = routerCollections[options.namespace];
  }
  router = new Router({
    prefix: '/' + options.namespace,
  });
  routerCollections[options.namespace] = router;
  setup(router, options);
  return router;
}

function setup(router: Router, options: BluePrintOptions) {
  options.controllerCollections.forEach(c => {

  });
}