import { Context } from 'koa';

export class AdminController {

  constructor() {

  }

  @route('/')
  async index(ctx: Context) {
    ctx.body = {
      hello: 'world',
    };
  }
}
