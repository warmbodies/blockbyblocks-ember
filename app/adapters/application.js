import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  authorizer: 'authorizer:devise',
  namespace: '/api'
});
