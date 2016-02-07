import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';


export default ActiveModelAdapter.extend({
  authorizer: 'authorizer:devise',
  namespace: config['API'].namespace,
  host: config['API'].host
});
