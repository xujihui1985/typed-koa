import * as Router from 'koa-router';
import { AdminController } from './controllers/AdminController';

const admin = new AdminController();

const router = new Router({
  prefix: '/admin',
});

router.get('/', admin.index);

export default router;