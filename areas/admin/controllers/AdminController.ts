
import { Context } from 'koa';

export class AdminController {

  constructor() {

  }

  async index(ctx: Context) {
    ctx.body = {
      hello: 'world',
    };
  }
}