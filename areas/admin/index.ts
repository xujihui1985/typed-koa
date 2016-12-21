import { area } from '../../AreaFactory';
import { AdminController } from './controllers';

export default area({
  namespace: 'admin',
  controllerCollections: [
    AdminController
  ],
});
