import { bluePrint } from '../../RouterFactory';
import { AdminController } from './controllers';

export default bluePrint({
  namespace: 'admin',
  controllerCollections: [
    AdminController
  ],
});
