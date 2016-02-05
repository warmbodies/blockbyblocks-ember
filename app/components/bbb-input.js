import Ember from 'ember';

// export default Ember.TextField.extend({
export default Ember.Component.extend({
  attributeBindings: ['data-test-id'],
  layout: 'template'
});
