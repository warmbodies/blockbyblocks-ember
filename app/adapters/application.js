import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  namespace: config.API.namespace,
  host: config.API.host
});
